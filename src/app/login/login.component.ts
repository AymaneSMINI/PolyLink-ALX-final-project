import { Component,ViewEncapsulation } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  token : any;
  userForm : FormGroup;
  constructor(private _form : FormBuilder, private user_service : UsersService, 
    private router : Router,private cookieService: CookieService ){
    this.userForm = this._form.group({
      email : [null,Validators.required],
      password : [null,Validators.required],
    })
  }
  onFormSubmit(){
    this.user_service.login(this.userForm.getRawValue()).subscribe({
      next: (val:any) => {
        this.token = val.token
        this.cookieService.set("userItem",val.token);
        this.cookieService.set('userData', jwt_decode.jwtDecode(this.token));
        this.token = jwt_decode.jwtDecode(val.token);
        this.cookieService.set("user_id",this.token.user[0].user_id);
        console.log(" message: "+ val.message);
        if(val.message == "uncomplited login"){
          this.router.navigateByUrl('/add-route');
        }
        else{
          this.router.navigateByUrl('/dashboard');
        }
        this.userForm.reset();
         Swal.fire(
          'Logged!',
          "you're successfully Logged!",
          'success'
        ) },
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
