import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent {
  userForm : FormGroup;
  constructor(private _form : FormBuilder, private user_service : UsersService ){
    this.userForm = this._form.group({
      username : [null,Validators.required],
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
