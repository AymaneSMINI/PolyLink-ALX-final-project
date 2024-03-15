import { Component } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
  code: string | undefined;
  
  // this called only if user entered full code
  onCodeCompleted(code: string) {
    this.code = code;
    
  }
  submit(){
    console.log(this.code);
  }
}
