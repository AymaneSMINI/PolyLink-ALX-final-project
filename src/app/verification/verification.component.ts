import { Component } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
  code: string | undefined;
  email : string | undefined;
  constructor(private service: UsersService, private route : Router, private shared:SharedService){
  }
  ngOnInit(){
    this.shared.getUserData().subscribe(data => {
      this.email = data.email;
  });
  }
  onCodeCompleted(code: string) {
    this.code = code; 
  }
  Verify(){
    this.service.verification({"email": this.email,"code":this.code}).subscribe((res)=>{
      if(res){
        this.shared.setUserData(res);
        this.route.navigateByUrl('/add-route');
      }
      else{
        Swal.fire(
          'Error!',
          'wrong verification code',
          'error'
        )
      }
    })
    console.log(this.code);
  }
}
