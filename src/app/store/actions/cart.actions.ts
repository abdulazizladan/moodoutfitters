import { Actions } from "@ngrx/effects";

export enum CartActions{
  addItem = '[Cart] Add Item',
  addItemSuccess = '[Cart] Add Item Success',
  addItemFailure = '[Cart] Add Item Success',
  removeItem = '[Cart] Remove Item',
  clearItems = '[Cart] Clear Items'
}

export class AddItemAction extends Actions{

}

export class RemoveItemAction extends Actions{

}

export class ClearItemsAction extends Actions{

}

export type CartActionTypes = AddItemAction | RemoveItemAction | ClearItemsAction
