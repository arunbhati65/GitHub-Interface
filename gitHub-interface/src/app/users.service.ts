import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//import { map } from 'rxjs/operators';
import { catchError, map, tap, retry } from 'rxjs/operators';
//import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { User } from './user/user.model';
import { Packet } from './user/packet.model';

@Injectable()
export class ServerService {

  
  constructor(private http: Http) {}
  
  // getUsers(name : String) {
  //   console.log(name);
  //   return this.http.get('https://api.github.com/search/users?q='+name)
  //   .pipe(
  //       tap(
  //           (response: Response) => {
  //                     console.log(response.json())
  //                      return response.json();
  //                    },
  //           error => console.log("Error :: " + error)
  //       )
  //     );
  // }



  getUsers(name :String){
    return this.http.get('https://api.github.com/search/users?q='+name)
    .pipe(
      tap(
        // (response : Response)=>{
        //   return <User[]>response.json();
        // }
        (response : Response) =>{
          response.json() as Packet;
          return response;
        } 
      ),
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error : Response){
    return Observable.throw(error.status);
  }

}
