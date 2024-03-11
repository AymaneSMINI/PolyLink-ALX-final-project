import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productForm : FormGroup;
  ListPackage = ["pack1","pack2","pack3"];
  dataSource : Array <any> =[];
  displayedColumns: string[] = ['package name', 
  "package items",
  "single price",
  "wholsales price",
  "Created Date",
  "Action"];
  constructor(private _form : FormBuilder){
    this.productForm = this._form.group({
      packagename : [null,Validators.required],
      packageitems : [null,Validators.required],
      singleprice : [null,Validators.required],
      wholsalesprice : [null,Validators.required]
    })
  }
  Update( element : any){

  }
  Delete( element : any){

  }
  clear(){
    this.productForm = this._form.group({
      packagename : [null,Validators.required],
      packageitems : [null,Validators.required],
      singleprice : [null,Validators.required],
      wholsalesprice : [null,Validators.required]
    });
  }
  onFormSubmit(){
    console.log(this.productForm.value);
    console.log("hheeeeeeeeee");
    
  }
}
