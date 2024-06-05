import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LinksService } from '../services/links/links.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public links:Array<any> = [];
  linkform : FormGroup;
  id_route : any;
  username : string = '';
  route : string = '';
  id : any;
  body : any;
  constructor(private _form:FormBuilder,private _servicelink: LinksService,
    private _router:Router, private cookieService: CookieService){
    this.linkform = this._form.group({
      link :  [null,Validators.required],
      title :  [null,Validators.required]
    })    
    
  }
  ngOnInit(){
    this.id =  this.cookieService.get('user_id');
    this.getuser();
    this.getroute();
  }

  public appendLink():void {
   this.body = {
      "link_title"  : this.linkform.value.title,
      "user_id" : this.id,
      "route_id" : this.id_route,
      "link"  : this.linkform.value.link
  }
     this._servicelink.add_link(this.body).subscribe({next: (val)=>{
      this.linkform.reset();
      Swal.fire(
        'success!',
        ''+val.message,
        'success'
      )
      this.getlinks()
     }})
     
    }
    getlinks(){
      this._servicelink.getLinks(this.id,this.id_route).subscribe({next :(val)=>{
        this.links = val.result;
      }})
    }
    getuser(){      
      this._servicelink.getUser( this.cookieService.get('user_id')).subscribe((val)=>{
        this.username = val.user[0].username;
    })
    }
    getroute(){
      this._servicelink.getRoute(this.id).subscribe({
        next : (val:any)=>{
          this.route = val.result[0].route;
          this.id_route = val.result[0].route_id;
          this.getlinks()
        },
        error:(err:any) =>{        
          console.log(err);
          
        }
      });
    }    
    onNavigate(link : any){
      window.open(link, "_blank");
  }
}
