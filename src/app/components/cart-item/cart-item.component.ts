import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item } from 'src/app/models/item.model';
import { RemoveItemAction } from 'src/app/store/actions/cart.actions';
import { CartState } from 'src/app/store/reducers/cart.reducer';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit{

  @Input()
  data!: Item;

  quantity: number = 1;

  total!: number;

  constructor( private store: Store<{cart: CartState}>) {

  }

  ngOnInit(): void {
    this.total = this.quantity * this.data.prices.ngn;
  }

  remove() {
    const itemId = this.data.id;
    this.store.dispatch(RemoveItemAction({id: itemId}))
  }
}
