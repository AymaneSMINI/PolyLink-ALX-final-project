import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './authservice/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private _authService: AuthService, private router: Router) { }

    canActivate(): boolean {
        if (this._authService.isLogged()) {
          this.router.navigate(['/dashboard']);
          return false;
        }
        return true;
      }
}