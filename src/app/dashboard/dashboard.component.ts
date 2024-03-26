import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LinksService } from '../services/links/links.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public elements:Array<{link:''}> = [];
  linkform : FormGroup;
  constructor(private _form:FormBuilder,private _servicelink: LinksService){
    this.linkform = this._form.group({link :  [null,Validators.required]})
  }
  public appendLink():void {
     this.elements.push(this.linkform.value);
     this._servicelink.add_link(this.linkform.value).subscribe(val=>{

     })
     console.log(this.elements);
     
    }
}
