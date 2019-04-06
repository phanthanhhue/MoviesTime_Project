import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CheckSignInGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate() {
    if (localStorage.getItem('userSignIn')) {
      return true;
    }
    else {
      Swal.fire('Warning!', 'You need login first!', 'warning').then(() => {
        this.router.navigate(['/sign-in']);
      })
    }
    return false;
  }
}
