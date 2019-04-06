import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_core/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  saveForm: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  SignIn(logInInfo:any) {
    this.userService.signIn(logInInfo.UserName, logInInfo.Password).subscribe((data) => {
      // console.log(data.MaLoaiNguoiDung)
      if (typeof data === 'object') {
        const UserLogin: string = JSON.stringify(data);
        localStorage.setItem('userLogin', UserLogin);
        Swal.fire('Successful!', 'Login successfull!', 'success').then(() => {
          this.router.navigate(['/movie-list']);
        });
      }
      else {
        Swal.fire('Warning', 'Username or password incorrect!', 'warning');
      }
    });
  }
}
