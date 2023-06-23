import { Component, OnInit } from '@angular/core';
import { Stripe, StripeScriptTag } from "stripe-angular";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  //paymentHandler: any = null;
  //invalidError: string = '';
  //stripe = Stripe('pk_test_51N2SbQEtQOTCGnHqvPOMo5SXFzqunmx0kf66STRTtrHitkYLH8eZgqZfXqr9J93SXjvMOPGrDaaS6rEpWjM6eu9V00C1S91xdW');

  constructor( private stripeScriptTag: StripeScriptTag) {
    //if (!this.stripeScriptTag.StripeInstance) {
    //  this.stripeScriptTag.setPublishableKey('pk_test_51N2SbQEtQOTCGnHqvPOMo5SXFzqunmx0kf66STRTtrHitkYLH8eZgqZfXqr9J93SXjvMOPGrDaaS6rEpWjM6eu9V00C1S91xdW');
    // this.stripeScriptTag.load
    //}
  }

  /**checkoutButton = document.querySelector('#checkout-button');


  checkout() {
    this.stripe.redirectToCheckout({
      items: [],
      successUrl: 'https://www.example.com/success',
      cancelUrl: 'https://www.example.com/cancel'
    })
  }
 */
  ngOnInit(): void {
    //this.invokeStripe()
  }
  /*
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51N2SbQEtQOTCGnHqvPOMo5SXFzqunmx0kf66STRTtrHitkYLH8eZgqZfXqr9J93SXjvMOPGrDaaS6rEpWjM6eu9V00C1S91xdW',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'Positronx',
      description: '3 widgets',
      amount: amount * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51N2SbQEtQOTCGnHqvPOMo5SXFzqunmx0kf66STRTtrHitkYLH8eZgqZfXqr9J93SXjvMOPGrDaaS6rEpWjM6eu9V00C1S91xdW',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }

  cardCaptureReady = false

  onStripeInvalid( error: Error ){
    console.log('Validation Error', error)
  }

  onStripeError( error: Error ){
    console.error('Stripe error', error)
  }

  setPaymentMethod( token: stripe.paymentMethod.PaymentMethod ){
    console.log('Stripe Payment Method', token)
  }

  setStripeToken( token: stripe.Token ){
    console.log('Stripe Token', token)
  }

  setStripeSource( source: stripe.Source ){
    console.log('Stripe Source', source)
  }
  */
}
