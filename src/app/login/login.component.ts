import { Component,ViewEncapsulation } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Token } from '@angular/compiler';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  userForm : FormGroup;
  constructor(private _form : FormBuilder, private user_service : UsersService, 
    private router : Router,private cookieService: CookieService ){
    this.userForm = this._form.group({
      email : [null,Validators.required],
      password : [null,Validators.required],
    })
  }
  onFormSubmit(){
    console.log(this.userForm.value);
    this.user_service.login(this.userForm.value).subscribe({
      next: (val:any) => {
        this.cookieService.set("userItem",val.token);
        this.cookieService.set('userData', jwt_decode.jwtDecode(val.token));
        this.router.navigateByUrl('/dashboard');
        this.userForm.reset();
         Swal.fire(
          'Added!',
          "User successfully registered!",
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
