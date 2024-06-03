import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // private api = "email.us-east-2.amazonaws.com";

  constructor(
    // private http: HttpClient
  ) { }

  // PostMessage(input: any) {
  //   return this.http.post(this.api, input, { responseType: 'text' }).pipe(
  //     map((response: any) => { return response; }),
  //     catchError((err) => { return err; })
  //   )
  // }
}
