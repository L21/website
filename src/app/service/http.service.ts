import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
  private BASE_URL = 'http://localhost:4000/';

  private headerOptions = new RequestOptions({
        headers : new Headers({ 'Content-Type' : 'application/json;charset=UTF-8' })
  });
  constructor( private http:Http) { }

  public getAuthorEducation(){
    return this.http.post(`${this.BASE_URL}getAuthorEducation`,this.headerOptions)
        .map((response:Response) => response.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Internal Server error'));
  }

  public getAuthorCareer(){
    return this.http.post(`${this.BASE_URL}getAuthorCareer`,this.headerOptions)
        .map((response:Response) => response.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Internal Server error'));
  }

  public getAuthorInfo(){
    return this.http.post(`${this.BASE_URL}getAuthorInfo`,this.headerOptions)
        .map((response:Response) => response.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Internal Server error'));
  }

  public getAuthorProjects(){
    return this.http.post(`${this.BASE_URL}getAuthorProjects`,this.headerOptions)
        .map((response:Response) => response.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Internal Server error'));
  }
}
