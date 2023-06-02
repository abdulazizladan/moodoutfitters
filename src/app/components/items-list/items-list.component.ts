import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit{

  items$!: Observable<Item[]>

  constructor(private storeService: StoreService) {

  }

  ngOnInit(): void {
    this.items$ = this.storeService.getAll();
  }
}
