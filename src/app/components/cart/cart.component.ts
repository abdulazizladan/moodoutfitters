import { Component, signal, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart } from 'src/app/store/reducers/cart.reducer';
import { MatDialog } from '@angular/material/dialog';
import { SumaryComponent } from '../sumary/sumary.component';

import { Observable, combineLatest, distinct, forkJoin, mergeMap, switchMap } from 'rxjs';
import { RemoveAllItemsAction } from 'src/app/store/actions/cart.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  itemsSequence$: Observable<Item[]>;
  total : number = 0.00;
  shippingAddressForm!: FormGroup;

  constructor(
    private store: Store<{cart: Cart}>,
    private fb: FormBuilder,
    private dialog: MatDialog ) {
      this.itemsSequence$ = this.store.select((items) => items.cart.cart).pipe()
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
