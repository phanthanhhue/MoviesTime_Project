import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_core/services/user.service';
import { User } from 'src/app/_core/models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  saveForm: Boolean = false;


  constructor(private userService: UserService) { }
  @ViewChild('signUpForm') signUpForm: NgForm;
  ngOnInit() {
  }
  
  checkPassword(verifyPassword: string, password: string): boolean {
    if (verifyPassword !== password) {
      this.signUpForm.control.setErrors({ 'passwordErrors': true });
      return true;
    }
    console.log(this.signUpForm.errors);
    this.signUpForm.control.setErrors({ 'passwordErrors': false });
    return false;
  }

  Edit(user: User) {
    user.VerifyPassword = user.Password;
    this.signUpForm.setValue(user);
  }

  SignUp(user: User) {
    user.MaNhom = 'GP05';
    user.MaLoaiNguoiDung = 'KhachHang';
    this.userService.signUp(user).subscribe((data) => {
      if(typeof data === 'object') {
        Swal.fire('Warning!', 'Congratulation! Sign up successfull!', 'success');
      }
      else {
        Swal.fire('Warning!', data, 'warning');
      }
    });
  }
}
