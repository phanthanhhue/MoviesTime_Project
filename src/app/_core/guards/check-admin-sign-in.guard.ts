import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CheckAdminSignInGuard implements CanActivate {
  constructor (private router: Router) {

  }
  canActivate() {
    if (localStorage.getItem('stoAdminLogin')) {
      return true;
    }
    else {
      Swal.fire('Warning!', 'You are not permission!', 'warning').then(() => {
        this.router.navigate(['/admin/admin-login'])
      })
    }
  }
}
