import { createReducer, on } from "@ngrx/store";
import { Item } from "src/app/models/item.model";
import { setNaira, setPounds } from "../actions/currency.actions";
import { AddItemAction, RemoveAllItemsAction, RemoveItemAction } from "../actions/cart.actions";
import { ContactInfo } from "src/app/models/contact.model";

export const key = 'cart';

export class CartState{
  items !: Item[];
  cart !: Item[];
  currency !: 'NGN' | 'GBP';
  contact !: ContactInfo | null;
  loading !: boolean;
}

export const initialState: CartState = {
  items: [
    {
      id: "221",
      dateAdded: new Date(22),
      description: "blah",
      image: "jh",
      name: "cap",
      prices: {
        gbp: 222,
        ngn: 127
      },
      stock: 34
    }
  ],
  cart: [],
  currency: "NGN",
  contact: null,
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
  on(AddItemAction, (state, { item }) => {

    const isItemInCart = state.cart.some(cartItem => cartItem.id != item.id)

    if(isItemInCart) {
      return state;
    }

    const updateCart = [...state.cart, item];

    return {
      ...state,
      cart: updateCart
    }
  })
  //on(AddItemAction, (state, {item}) => ({
  //  ...state,  cart: [...state.cart, item] })
  //)
)
