import { Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { SwalService } from '../services/swal/swal.service';
import { BookService } from '../services/book/book.service';
import { MatStepper } from '@angular/material/stepper';
import { UserService } from '../services/user/user.service';
import { Borrowing } from '../models/Borrowings';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss']
})
export class TransferPage implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  borrowings: Borrowing[];
  displayedColumns: string[] = ['title', 'status'];
  dataSource: MatTableDataSource<Borrowing>;
  transferReqeustDocument;
  acceptanceStatus = {
    img_url: '',
    title: 'Rejected'
  };

  constructor(
    private scanner: BarcodeScanner,
    private swal: SwalService,
    private bookService: BookService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    await this.userService.getUserBorrowings();
    this.borrowings = this.userService.getAllBorrowings().map((borrow: Borrowing) => {
      const { date_due } = borrow;
      if (new Date(date_due) <= new Date()) {
        borrow.status = 'overdue';
      }
      return borrow;
    });
    this.userService.getCurrentTransferDetails().subscribe((data: Borrowing[]) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  getTransferDocument = () => {
    console.log('hjjh');
    const transferDocPath = this.bookService.getCurrentActiveTransfer().ref.path;
    return transferDocPath;
  };

  scanForQR = () => {
    this.scanner
      .scan()
      .then(data => {
        this.bookService.acceptBookTransfer(data.text);
        alert(data.text);
      })
      .catch(error => {
        console.log('error occured while scanning QR', error);
        this.swal.viewErrorMessage(
          'Error',
          'You have to be on your iOS or android version inorder to access this service'
        );
      });
  };

  /**
   * Move the stepper to next level
   */
  moveHeader = () => {
    this.stepper.selectedIndex = this.stepper.selectedIndex + 1;
  };

  subscribeToTransferPage = () => {
    // Setting the transfer request document path to variable for a QR
    this.transferReqeustDocument = this.getTransferDocument();

    // Subscribing for the active transfer document changes and if approved by the user, view will be changed to the next step
    const activeTransferObservable = this.bookService.getCurrentActiveTransfer();
    if (activeTransferObservable !== undefined) {
      this.bookService
        .getCurrentActiveTransfer()
        .valueChanges()
        .subscribe((data: Borrowing) => {
          const { status } = data;

          /**
           * Checking whether the transfer is success or not
           * This means if the library approved the transaction it produce 'approved' state and if rejected it produce 'toBeApproved' state
           */
          if (status === 'toBeApproved') {
            this.moveHeader();
            this.acceptanceStatus.img_url = '../../assets/img/backgrounds/transfer-pending.svg';
            this.acceptanceStatus.title = 'Checking';
          } else if (status === 'approved') {
            this.acceptanceStatus.title = 'Approved';
            this.acceptanceStatus.img_url = '../../assets/img/backgrounds/transfer-success.svg';
          } else if (status === 'rejected') {
            this.acceptanceStatus.title = 'Rejected';
            this.acceptanceStatus.img_url = '../../assets/img/backgrounds/transfer-rejected.svg';
          } else {
            this.acceptanceStatus.img_url = '../../assets/img/backgrounds/transfer-scan.svg';
            this.acceptanceStatus.title = 'Scan QR';
          }
        });
    }
  };
}
