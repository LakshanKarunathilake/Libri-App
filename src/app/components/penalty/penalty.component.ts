import { AngularFireFunctions } from '@angular/fire/functions';
import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { SwalService } from 'src/app/services/swal/swal.service';
import { Borrowing } from 'src/app/models/Borrowings';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.scss']
})
export class PenaltyComponent implements OnInit {
  handler: any;
  loading = false;
  borrowings: Borrowing[];
  constructor(
    private aff: AngularFireFunctions,
    private swal: SwalService,
    private user: UserService
  ) {
    this.borrowings = user.getAllBorrowings();
  }

  ngOnInit() {
    this.handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_pKqUR1gh4wxiZvBTN41bLsvV00ce1RDELI',
      image: '../assets/img/icon.png',
      locale: 'auto',
      source: async source => {
        this.loading = true;
        const user = this.user.getCurrentUser();
        const fun = this.aff.functions.httpsCallable('penaltyPayment');
        fun({
          source: source.id,
          uid: user.uid,
          amount: 250.25
        })
          .then(data => {
            this.swal.viewSuccessMessage(
              'Payment',
              'Thanks for the payment wait till the confirmation'
            );
            console.log('data', data);
          })
          .catch(error => {
            console.error('error', error);
            this.swal.viewErrorMessage(
              'Payment',
              'Sorry error occured while processing the payment'
            );
          });
      }
    });
  }

  // Open the checkout handler
  async checkout(e) {
    const user = this.user.getCurrentUser();
    this.handler.open({
      name: 'Fireship Store',
      description: 'Late book return',
      amount: 250.85,
      email: user.email
    });
    e.preventDefault();
  }

  // Close on navigate
  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close();
  }

  displayConfirmationMessage = () => {
    this.swal.displayConfirmation(
      'Request',
      'Are you sure you want to place this book as a lost book',
      this.onConfirmation
    );
  };

  /**
   * After user confirm the book lost request should be placed, this method should be executed
   * This will focus on writing the relavant information on the firebase database
   */
  onConfirmation = () => {
    console.log('object', 'confirmed');
  };
}
