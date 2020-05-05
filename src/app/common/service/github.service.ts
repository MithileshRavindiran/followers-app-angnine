import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { NotFoundException } from '../exceptions/notfound.exception';
import { AppException } from '../exceptions/app.exception';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class GithubService  {

  private url:string = "https://api.github.com/users/";

  constructor(private httpClient: HttpClient) { }


  getFollowers(userName?:string) {
    let finalUrl: string;
    console.log(userName);
    if (userName == null) {
        userName = "mithileshravindiran";
    }
    finalUrl = this.url + userName+"/followers"
    console.log(finalUrl);
    return  this.httpClient
    .get(finalUrl)
    .pipe(
      map(response => {
        return response
      })
      ,
      catchError((error: HttpErrorResponse) => {
        if (error.status  === 404) {
          throw (new NotFoundException(error));
        }else  
        throw (new AppException(error));
      })
    );
  }
}
