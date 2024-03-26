import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  url = "http://localhost:8000/";

  constructor(private _http : HttpClient) { }

  add_link (data : any): Observable<any> {
    return this._http.post(this.url + "", data);
   }
}
