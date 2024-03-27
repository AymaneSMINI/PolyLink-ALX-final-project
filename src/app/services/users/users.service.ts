import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = "http://localhost:8000/api/";

  constructor(private _http : HttpClient) { }

  register (data : any): Observable<any> {
    return this._http.post(this.url + "register", data);
   }
  login (data : any): Observable<any> {
    return this._http.post(this.url + "login",data);
   }
   verification (data : any): Observable<any> {
    return this._http.post(this.url + "verification",data);
   }
  addroute(data : []): Observable<any> {
    return this._http.post(this.url + "" , data);
   } 

}
