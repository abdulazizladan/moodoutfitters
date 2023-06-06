import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor( private http: HttpClient) {

  }

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>('https://api.npoint.io/9df1a9bcb633e147c1ea');
  }
}
