import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpComponent } from 'src/app/modules/pages/sign-up/sign-up.component';

@Injectable({
  providedIn: 'root'
})
export class CheckSaveFormGuard implements CanDeactivate<SignUpComponent> {
  canDeactivate(signUpComponent: SignUpComponent): boolean {
    if (signUpComponent.saveForm === true) {
      return true;
    }
    const msg = confirm('You are not save infomations! Are you sure leave this page?');
    if (msg === true) {
      return true;
    }
    return false;
  }
}
