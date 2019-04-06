import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckAdminSignInGuard implements CanActivate {
  constructor (private router: Router) {

  }
  canActivate() {
    this.router.navigate(['/admin-login'])
    return true;
  }
}
