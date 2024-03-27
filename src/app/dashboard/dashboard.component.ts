import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LinksService } from '../services/links/links.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public elements:Array<{link:''}> = [];
  linkform : FormGroup;
  constructor(private _form:FormBuilder,private _servicelink: LinksService,
    private _cookieService: CookieService,private _router:Router){
    this.linkform = this._form.group({link :  [null,Validators.required]})
    if (this._cookieService.check("userData") && this._cookieService.check("userItem")) {
      this._router.navigate(['/dashboard']);
    } else {
      this._router.navigate(['/login']);
   }
  }
  public appendLink():void {
     this.elements.push(this.linkform.value);
     this._servicelink.add_link(this.linkform.value).subscribe(val=>{

     })
     console.log(this.elements);
     
    }
    
}
