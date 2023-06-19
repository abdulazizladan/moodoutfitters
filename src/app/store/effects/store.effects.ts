import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { EMPTY, Observable, exhaustMap, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs";

import { StoreService } from "src/app/services/store.service";
import { Item } from "src/app/models/item.model";
import { LoadItemsAction, LoadItemsActionSuccess } from "../actions/cart.actions";

@Injectable()
export class StoreEffects {

  constructor(
    private storeService: StoreService,
    private actions$: Actions) {

  }

  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(LoadItemsAction),
    exhaustMap(() => this.storeService.getAll()
    .pipe(
      map(items => LoadItemsActionSuccess()),
      catchError(() => of({type: '[Store] Load All Items Error'}))
    )
    )
  ))
}
