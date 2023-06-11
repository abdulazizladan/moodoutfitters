import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactInfo } from 'src/app/models/contact.model';

@Component({
  selector: 'app-sumary',
  templateUrl: './sumary.component.html',
  styleUrls: ['./sumary.component.scss']
})
export class SumaryComponent {

  constructor( @Inject(MAT_DIALOG_DATA) public data: ContactInfo) {

  }

}
