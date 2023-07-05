import { Actions } from "@ngrx/effects";
import { createAction, props } from "@ngrx/store";
import { Item } from "src/app/models/item.model";

export enum CartActions{
  addItem = '[Cart] Add Item',
  addItemSuccess = '[Cart] Add Item Success',
  addItemFailure = '[Cart] Add Item Success',
  removeItem = '[Cart] Remove Item',
  clearItems = '[Cart] Clear Items'
}

//export class AddItemAction extends Actions{}

export const LoadItemsAction = createAction('[Store] Load All Items');

export const LoadItemsActionSuccess = createAction('[Store] Load All Items Success', props<{items: Item[]}>());

export const LoadItemsActionFailure = createAction('[Store] Load All Items Failure');

export const AddItemAction = createAction('[Cart] Add Item', props<{item: Item}>());

export const AddItemActionSuccess = createAction('[Cart] Add Item Success');

export const AddItemActionFailure = createAction('[Cart] Add Item Failure');

export const RemoveItemAction = createAction('[Cart] Remove Item', props<{id: string}>())

export const RemoveAllItemsAction = createAction('[Cart] Remove All Items');

//export type CartActionTypes = AddItemAction | RemoveItemAction | ClearItemsAction
