import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { AddItemAction, RemoveAllItemsAction } from 'src/app/store/actions/cart.actions';
import { CartState } from 'src/app/store/reducers/cart.reducer';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  data!: Item;

  currency$!: Observable<string>;

  constructor( private store: Store<{cart: CartState}>, private router: Router) {
    this.currency$ = this.store.select(cart => cart.cart.currency);
  }

  ngOnInit() {
    //this.currency$ = this.store.select(cart => cart.currency);
    //console.log(this.currency$)
  }

  buy() {
    const purchase = this.data;
    this.store.dispatch(RemoveAllItemsAction());
    this.store.dispatch(AddItemAction({item: purchase}));
    this.router.navigate(['./cart']);
  }

  addToCart() {
    const newItem = this.data;
    this.store.dispatch(AddItemAction({item: newItem}));
  }

}
