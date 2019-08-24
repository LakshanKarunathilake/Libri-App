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

  getTitle = () => {
    return 'test data';
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
   * Placing the transfer request in the firebase
   * This should contain the sender,book,issue details
   *
   */
  placeATransfer = () => {
    const book = {};
    this.bookService.placeABookTransfer({
      book
    });
  };

  /**
   * Move the stepper to next level
   */
  moveHeader = () => {
    console.log('clicked');
    this.stepper.selectedIndex = 1;
  };
}
