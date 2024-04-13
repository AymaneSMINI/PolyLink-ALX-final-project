import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private cookies : CookieService){

  }
  logged(){
    return this.cookies.get('user_id') ? true : false;
  }
  logout(){
    this.cookies.deleteAll();
  }
}
