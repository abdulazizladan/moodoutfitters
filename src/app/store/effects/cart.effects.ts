import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable()
export class CartEffects{

  constructor(
    public actions$: Actions
  ) {

  }

}
