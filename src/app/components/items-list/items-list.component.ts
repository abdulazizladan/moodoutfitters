import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { StoreService } from 'src/app/services/store.service';
import { LoadItemsAction } from 'src/app/store/actions/cart.actions';
import { Cart } from 'src/app/store/reducers/cart.reducer';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit{

  items$!: Observable<Item[]>

  constructor(
    private storeService: StoreService,
    private store: Store<Cart>) {

  }

  ngOnInit(): void {
    this.items$ = this.storeService.getAll();
    this.store.dispatch(LoadItemsAction())
  }
}
