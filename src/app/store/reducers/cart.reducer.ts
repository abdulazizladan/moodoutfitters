import { createReducer, on } from "@ngrx/store";
import { Item } from "src/app/models/item.model";
import { setNaira, setPounds } from "../actions/currency.actions";
import { AddItemAction, RemoveAllItemsAction, RemoveItemAction } from "../actions/cart.actions";

export const key = 'cart';

export class CartState{
  items !: Item[];
  cart !: Item[];
  currency !: 'NGN' | 'GBP';
  loading !: boolean;
}

export const initialState: CartState = {
  items: [
    /*{
      id: 'abcd',
      name: 'abbb',
      image: 'img1.jpg',
      prices: {
        ngn: 2000,
        gbp: 37
      },
      stock: 10,
      dateAdded: new Date(123),
      description: 'asdf'
    },
    {
      id: 'abab',
      name: 'abbb',
      image: 'img2.jpg',
      prices: {
        ngn: 2500,
        gbp: 38
      },
      stock: 5,
      dateAdded: new Date(153),
      description: 'aceg'
    }*/
  ],
  cart: [],
  currency: "NGN",
  loading: false
}

export const Cart = createReducer(
  initialState,
  on(setNaira, state => ({...state, currency: 'NGN'}) ),
  on(setPounds, state => ({...state, currency: 'GBP'}) ),
  on(RemoveAllItemsAction, state => ({...state, cart: []})),
  on(RemoveItemAction, (state, { id }) => {
    const updatedItems = state.cart.filter(cart => cart.id !== id);
    return {
      ...state,
      cart: updatedItems,
    };
  }),
  /**on(AddItemAction, (state, { item }) => {

    const isItemInCart = state.cart.some(cartItem => cartItem.id != item.id)

    if(isItemInCart) {
      return state;
    }

    const updateCart = [...state.cart, item];

    return {
      ...state,
      cart: updateCart
    }
  })*/
  on(AddItemAction, (state, {item}) => ({
    ...state,  cart: [...state.cart, item] })
  )
)
