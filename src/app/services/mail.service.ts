import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private url: string = "https://mailthis.to/Ladanski";

  constructor( private http: HttpClient ) { }

  sendMail( input: any ) {
    return this.http.post(this.url, input, {responseType: 'text'}).pipe(
      map(
        (response: any) => {
          if(response) {
            return response;
          }
        },
        (error: any) => {
          if(error){
            return error
          }
        }
      )
    )
  }

}
