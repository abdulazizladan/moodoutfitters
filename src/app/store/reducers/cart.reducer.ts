import { createReducer, on } from "@ngrx/store";
import { Item } from "src/app/models/item.model";
import { setNaira, setPounds } from "../actions/currency.actions";
import { ClearItemsAction } from "../actions/cart.actions";

export const key = 'cart';

export class CartState{
  items ?: Item[];
  currency ?: 'NGN' | 'GBP';
  loading ?: boolean;
}

export const initialState: CartState = {
  items: [
    {
      id: 'abcd',
      name: 'abbb',
      image: 'img.jpg',
      prices: {
        ngn: 2000,
        gbp: 37
      },
      stock: 10,
      dateAdded: new Date(123),
      description: 'as'
    }
  ],
  currency: "NGN",
  loading: false
}

export const cart = createReducer(
  initialState,
  on(setNaira, state => ({...state, currency: 'NGN'}) ),
  on(setPounds, state => ({...state, currency: 'GBP'}) ),
  //on(ClearItemsAction, state => ({}))
)
