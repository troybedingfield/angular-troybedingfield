import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api = "https://d2nbfvp176.execute-api.us-east-2.amazonaws.com/default/sendContactEmail";

  constructor(
    private http: HttpClient
  ) { }

  PostMessage(input: any) {
    const inputCleanup = JSON.stringify(input);
    return this.http.post(this.api, inputCleanup, { responseType: 'text' }).pipe(
      map((response: any) => {
        console.log(response);
        return response;
      }
      ),
      catchError((err) => {
        console.log(err);
        return err;
      }
      )
    )
    // console.log(inputCleanup);
  }
}
