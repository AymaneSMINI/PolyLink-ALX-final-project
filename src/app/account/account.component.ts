import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
icons = [
  {path: 'information', icon: "account_circle"},
  {path: 'links', icon: "link"},
  {path: 'change-password', icon: "lock"},
  {path: 'themes', icon: "color_lens"}];

constructor(private router: Router) { }

  isActive(link: string): boolean {
    link = "/account/"+link
    console.log(this.router.url);
    
    return this.router.url === link;
  }
}
