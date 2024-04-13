import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsersService } from '../services/users/users.service';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent {
  userForm : FormGroup;
  constructor(private _form : FormBuilder, private user_service : UsersService, 
    private route: Router, private shared:SharedService, private cookieService: CookieService ){
    this.userForm = this._form.group({
      username : [null,Validators.required],
      email : [null,Validators.required],
      password : [null,Validators.required],
    })
  }
  onFormSubmit(){
    this.user_service.register(this.userForm.value).subscribe({      
      next: (val:any) => {     
        this.shared.setUserData(this.userForm.value);  
        this.userForm.reset();
        this.route.navigateByUrl('/verification')
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
  getId(){
    console.log("email form",this.userForm.value.email);
    
    this.user_service.getId("adam@gmail.com").subscribe({
      next : (val:any)=>{
        console.log(val);   
/*         this.cookieService.set( 'user_id', val.user_id); 
 */      }
    }

    )
  }
}
