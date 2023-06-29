import { Component, Inject } from '@angular/core';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public data: Item) {

  }
}
