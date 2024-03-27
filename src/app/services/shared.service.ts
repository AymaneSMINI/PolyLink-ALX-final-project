import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public UserInfo = new BehaviorSubject<any>([]);

  constructor() { }
  
  setUserData(data: any) {
     this.UserInfo.next(data);
  }

  getUserData() {
     return this.UserInfo.asObservable();
  }}
