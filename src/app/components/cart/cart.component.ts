import { Component, signal, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from 'src/app/store/reducers/cart.reducer';
import { MatDialog } from '@angular/material/dialog';
import { SumaryComponent } from '../sumary/sumary.component';

import { Observable } from 'rxjs';
import { RemoveAllItemsAction } from 'src/app/store/actions/cart.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  items$ !: Observable<CartState>;
  total : number = 0.00;
  shippingAddressForm!: FormGroup;

  constructor(
    private store: Store<{cart: CartState}>,
    private fb: FormBuilder,
    private dialog: MatDialog ) {
      this.items$ = this.store.select((items) => items.cart)
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.shippingAddressForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone:  this.fb.group({
        extension: [''],
        number: ['']
      }),
      deliveryAddress: [''],
      region: ['', Validators.required]
    })
  }

  clearCart() {
    this.store.dispatch(RemoveAllItemsAction())
  }

  openSummary() {
    const formData = this.shippingAddressForm.value;
    console.log(formData);
    this.dialog.open(SumaryComponent, {data: formData});
  }

}
