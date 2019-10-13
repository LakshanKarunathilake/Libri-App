import { Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { SwalService } from '../services/swal/swal.service';
import { BookService } from '../services/book/book.service';
import { MatStepper } from '@angular/material/stepper';
import { UserService } from '../services/user/user.service';
import { Borrowing } from '../models/Borrowings';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss']
})
export class TransferPage implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  borrowings: Borrowing[];

  constructor(
    private scanner: BarcodeScanner,
    private swal: SwalService,
    private bookService: BookService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    await this.userService.getUserBorrowings();
    this.borrowings = this.userService.getAllBorrowings();
  }

  getTransferDocument = () => {
    const transferDocPath = this.bookService.getCurrentActiveTransfer().ref.path;
    return transferDocPath;
  };

  scanForQR = () => {
    this.scanner
      .scan()
      .then(data => {
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
    this.stepper.selectedIndex = this.stepper.selectedIndex +1 ;
  };

  subscribeToTransferPage = () => {
    console.log('Subscribing')
    const activeTransferObservable = this.bookService.getCurrentActiveTransfer();
    if (activeTransferObservable !== undefined) {
      this.bookService.getCurrentActiveTransfer().valueChanges().subscribe((data:Borrowing)=>{
        if(data.status === 'tarnsfering'){
          this.moveHeader();
        }
      })
    }
  }
}
