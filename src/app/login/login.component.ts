import { Component,ViewEncapsulation } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  userForm : FormGroup;
  constructor(private _form : FormBuilder, private user_service : UsersService ){
    this.userForm = this._form.group({
      email : [null,Validators.required],
      password : [null,Validators.required],
    })
  }
  onFormSubmit(){
    console.log(this.userForm.value);
    this.user_service.adduser(this.userForm.value).subscribe({
      next: (val:any) => {        
        this.userForm.reset();
        console.log(val);
        
        /* Swal.fire(
          'Added!',
          'Your product has been Added successfuly.',
          'success'
        ) */},
      error:(err:any) =>{
        console.log(err);
        Swal.fire(
          'Error!',
          'this email and username already exist',
          'error'
        )
      }
    })
  }
}
