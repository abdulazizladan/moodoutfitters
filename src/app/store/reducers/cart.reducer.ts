import { createReducer } from "@ngrx/store";
import { Item } from "src/app/models/item.model";

export const key = 'cart';

export class CartState{
  items ?: Item[];
  currency ?: 'NGN' | 'GBP';
  loading ?: boolean;
}

export const initialState: CartState = {
  items: [],
  currency: "GBP",
  loading: false
}

export const cartReducer = createReducer(
  initialState
)
