import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CheckSignInGuard implements CanActivate {
  isInvisible: boolean = true;
  constructor(private router: Router) {

  }

  canActivate() {
    if (localStorage.getItem('userSignIn')) {
      this.isInvisible = true;
      return true;
    }
    else {
      Swal.fire('Warning!', 'You need login first!', 'warning').then(() => {
        this.router.navigate(['/sign-in']);
      })
      this.isInvisible = false;
    }
    return false;
  }
}
