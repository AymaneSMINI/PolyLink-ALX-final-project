import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { DOCUMENT } from '@angular/common';
import * as jwt_decode from "jwt-decode";
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class AuthService {
   userData: any;
   isLoggedIn = false;
  url = 'http://localhost:8000/'
   constructor(
      private _router: Router,
      private _cookieService: CookieService,
      private _toastr: ToastrService,
      private _httpClient: HttpClient,
      @Inject(DOCUMENT) private document: Document) {
   }
   isLogged() {
    try {
       const token = this._cookieService.get("userItem");
       jwt_decode.jwtDecode(token);
       return true;
    } catch (error) {
       return false;
    }
 }
  }