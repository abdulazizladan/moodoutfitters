import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Stripe, StripeCardElement, StripeElements, StripeElementsOptions } from '@stripe/stripe-js';
import { StripeService } from 'ngx-stripe';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  ngOnInit(): void {

  }

}
