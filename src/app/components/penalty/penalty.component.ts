import { AngularFireFunctions } from '@angular/fire/functions';
import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.scss']
})
export class PenaltyComponent implements OnInit {
  constructor(
    private aff: AngularFireFunctions,
    private loadingCtrl: LoadingController,
    private user: UserService
  ) {}

  @Input() amount;
  @Input() description;

  handler: StripeCheckoutHandler;

  confirmation: any;
  loading = false;

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: 'pk_test_your_key',
      image: '/your-avatar.png',
      locale: 'auto',
      source: async source => {
        this.loading = true;
        const user = this.user.getCurrentUser();
        const fun = this.aff.httpsCallable('stripeCreateCharge');
        this.confirmation = await fun({
          source: source.id,
          uid: user.uid,
          amount: this.amount
        }).toPromise();
        this.loading = false;
      }
    });
  }

  // Open the checkout handler
  async checkout(e) {
    const user = this.user.getCurrentUser();
    this.handler.open({
      name: 'Fireship Store',
      description: this.description,
      amount: this.amount,
      email: user.email
    });
    e.preventDefault();
  }

  // Close on navigate
  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close();
  }
}
