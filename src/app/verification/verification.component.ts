import { Component } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
  code: string | undefined;
  data: any;
  constructor(private service: UsersService, private route : Router, 
    private cookieService: CookieService,private shared:SharedService){
  }
  ngOnInit(){
    this.shared.getUserData().subscribe(data => {
      this.data = data;
  });
  }
  onCodeCompleted(code: string) {
    this.code = code; 
  }
  Verify(){
    this.service.verification({"email": this.data.email,"code":this.code}).subscribe((res)=>{
      if(res){
        this.cookieService.set( 'user_id', res.result[0].user_id);
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
