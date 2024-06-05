import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
@ViewChild('fileInput') fileInput: ElementRef | undefined;
  UploadProgress: any | undefined;

constructor(private http:HttpClient){

}

  OnFileSelected(): void{
    const formData = new FormData(); 
    const fileInput : HTMLInputElement | null = document.getElementById(
      'fileInput'
    ) as HTMLInputElement;
    console.log("file",fileInput);
    
     if(fileInput && fileInput.files && fileInput.files.length>0){
      formData.append('file', fileInput.files[0]);
     }
     
     this.http.post('http:/localhost:8000/api/upload', formData, {
      reportProgress: true,
      observe: 'events'
     })
     .subscribe((event:any) =>{
      if (event.type === HttpEventType.UploadProgress){
        this.UploadProgress = Math.round(
          (100 * event.loaded) / event.total
        );
    } else if (event.type === HttpEventType.Response){
      this.UploadProgress = null;
      console.log("file Uploaded successfully", event.body);
      
    }
     })
  }
}
