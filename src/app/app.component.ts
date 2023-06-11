import { Component, signal } from '@angular/core';
import { map, interval, take, toArray, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moodoutfitters';

  variable =signal<number>(218);
}


