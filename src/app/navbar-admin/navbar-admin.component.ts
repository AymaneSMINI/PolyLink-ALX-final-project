import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent {
  constructor(private cookies : CookieService){

  }
  logged(){
    return this.cookies.get('user_id') ? true : false;
  }
  logout(){
    this.cookies.deleteAll();
  }
}
