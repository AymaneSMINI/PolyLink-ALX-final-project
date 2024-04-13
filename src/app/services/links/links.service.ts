import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  url = "http://localhost:8000/api/";

  constructor(private _http : HttpClient) { }

  add_link (data : any): Observable<any> {
    return this._http.post(this.url + "add-link", data);
   }
   add_route (data : any, id: any): Observable<any> {
    console.log(data, id);
    
    return this._http.post(this.url + "add-route", {route: data, user_id: id});
   }
   getRoute (user_id: any): Observable<any> {
    return this._http.post(this.url + "getRoute",{user_id});
   }
   getUser (user_id: any): Observable<any> {    
    return this._http.post(this.url + "getUser", {user_id});
   }
   getLinks (user_id: any, route_id :any): Observable<any> {
    return this._http.post(this.url + "getLinks", {user_id : user_id, route_id : route_id});
   }

}
