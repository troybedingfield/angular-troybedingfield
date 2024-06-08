import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    // console.log(inputCleanup);
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Access-Control-Request-Headers': '*',
    //   'Access-Control-Request-Method': 'post',
    //   'Access-Control-Allow-Origin': '*'
    // })
    // let options = { headers: headers };
    return this.http.post(
      this.api,
      inputCleanup,
      { observe: 'response' }
    )
      .pipe(
        map((response: any) => {
          return response;
        }
        )
      )
      .subscribe(response => {
        console.log(response.status);
      })

  }
}
