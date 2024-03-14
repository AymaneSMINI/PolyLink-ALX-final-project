import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = "http://localhost:8000/";

  constructor(private _http : HttpClient) { }

  adduser (data : any): Observable<any> {
    return this._http.post(this.url + "", data);
   }
  /* getuser (): Observable<any> {
    return this._http.get(this.url + "");
   }
  addroute(id : number, data : []): Observable<any> {
    return this._http.post(this.url + "" , data);
   } */

}
