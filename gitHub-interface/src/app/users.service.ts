import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//import { map } from 'rxjs/operators';
import { catchError, map, tap } from 'rxjs/operators';
//import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  
  getUsers() {
    return this.http.get('https://api.github.com/search/users?q=varun')
    .pipe(
        tap(
            (response: Response) => {
                      console.log(response.json())
                       return response.json();
                     }
        )
      );
  }

}
