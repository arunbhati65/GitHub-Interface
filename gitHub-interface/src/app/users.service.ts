import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//import { map } from 'rxjs/operators';
import { catchError, map, tap, retry } from 'rxjs/operators';
//import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Packet } from './models/packet.model';
import { Repo } from './models/repo.model';


@Injectable()
export class ServerService {
  pageNumber : Number =0;
  pageSize : Number = 100;
  
  constructor(private http: Http) {}
  

  getUsers(name :String){
    return this.http.get('https://api.github.com/search/users?q='+name+'&page=' + this.pageNumber+'&per_page=' + this.pageSize)
    .pipe(
      tap(
       
        (response : Response) =>{
          response.json() as Packet;
          return response;
        } 
      ),
      retry(3),
      catchError(this.handleError)
    );
  }

  getRepos(userName :String){
   
    return this.http.get('https://api.github.com/users/'+userName+'/repos')
    .pipe(
      tap(
       
        (response : Response) =>{
          response.json() as Repo[];
          console.log(response);
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
