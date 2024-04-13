import { Component } from '@angular/core';
import { LinksService } from '../services/links/links.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  username : string = '';
  public links:Array<any> = [];
  id : any;
  id_route : any;
  route : string = '';


  constructor(private _servicelink: LinksService, private cookieService : CookieService){
  }
  ngOnInit(){
    this.id =  this.cookieService.get('user_id');
    this.getuser();
    this.getroute();
    console.log(this.route, this.username,this.id_route,this.id);
  }
  getuser(){      
    this._servicelink.getUser( this.cookieService.get('user_id')).subscribe((val)=>{
      this.username = val.user[0].username;
  })
  }
  getlinks(){
    this._servicelink.getLinks(this.id,this.id_route).subscribe({next :(val)=>{
      console.log("getlinks", val.result);
      this.links = val.result;
    }})
  }
  getroute(){
    this._servicelink.getRoute(this.id).subscribe({
      next : (val:any)=>{
        console.log("route", val.result[0]);
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
