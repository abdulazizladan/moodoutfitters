import { Component, signal, OnInit, ViewChild } from '@angular/core';
import { State } from '@ngrx/store';
import { CartState } from 'src/app/store/reducers/cart.reducer';

import { StripeService, StripeCardComponent } from 'ngx-stripe';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items = signal(0);

  constructor(
    private store: State<CartState>, private stripeService: StripeService ) {

  }

  ngOnInit() {
    this.stripeService.setKey('YOUR_STRIPE_PUBLISHABLE_KEY');
  }

  createToken(card: StripeCardComponent) {
    this.stripeService
      .createToken(card.element, { name: 'John Doe' })
      .subscribe(result => {
        if (result.token) {
          // You can send the token to your server for further processing
          console.log(result.token);
        } else if (result.error) {
          console.error(result.error.message);
        }
      });
  }

  makePayment(amount: number, currency: string) {

  }

}
