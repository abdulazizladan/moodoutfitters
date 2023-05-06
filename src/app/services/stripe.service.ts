import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  private stripeApiKey = 'YOUR_STRIPE_API_KEY';

  constructor(private http: HttpClient) { }

  createPaymentIntent(amount: number, currency: string): Observable<any> {
    const url = 'https://api.stripe.com/v1/payment_intents';

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${this.stripeApiKey}`
    });

    const body = new URLSearchParams();
    body.set('amount', amount.toString());
    body.set('currency', currency);

    return this.http.post(url, body.toString(), { headers }).pipe(
      catchError(error => {
        return throwError(`Failed to create payment intent: ${error.message}`);
      })
    );
  }

  confirmPaymentIntent(paymentIntentId: string): Observable<any> {
    const url = `https://api.stripe.com/v1/payment_intents/${paymentIntentId}/confirm`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.stripeApiKey}`
    });

    return this.http.post(url, {}, { headers }).pipe(
      catchError(error => {
        return throwError(`Failed to confirm payment intent: ${error.message}`);
      })
    );
  }
}
