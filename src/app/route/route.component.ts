import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LinksService } from '../services/links/links.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent {
  routeform : FormGroup;
  id_user;
  constructor(private _form:FormBuilder,private _servicelink : LinksService, 
    private route:Router, private cookieService: CookieService ){
    this.routeform = this._form.group({route :  [null,Validators.required]})
    this.id_user = this.cookieService.get('user_id'); // To Get Cookie
}
addroute(){
    this._servicelink.add_route(this.routeform.value.route,this.id_user).subscribe({
    next: (val:any) => { 
        this.cookieService.set( 'route', 'polylink/'+ this.routeform.value.route); // To Set Cookie
        this.cookieService.set( 'user_id', this.id_user); // To Set user_id
        this.route.navigateByUrl('/dashboard')
      },
    error:(err:any) =>{
      Swal.fire(
        'Error!',
        ''+err.error.message,
        'error'
      )
    }
    })
}
}
