import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setNaira, setPounds } from 'src/app/store/actions/currency.actions';
import { Cart } from 'src/app/store/reducers/cart.reducer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  isNaira: boolean = true;

  constructor( private store: Store<Cart>) {

  }

  setPounds() {
    this.store.dispatch(setPounds());
    this.isNaira = false;
  }

  setNaira() {
    this.store.dispatch(setNaira());
    this.isNaira = true;
  }

}
