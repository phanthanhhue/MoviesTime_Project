import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/_core/services/staff.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  saveForm: boolean;

  constructor(private staffService: StaffService, private router: Router) { }

  ngOnInit() {
  }

  AdminLogin(adminLoginInfo: any) {
    this.staffService.adminLogin(adminLoginInfo.UserName, adminLoginInfo.Password).subscribe((data) => {
      console.log(data)
      if (typeof data === 'object' && data.MaLoaiNguoiDung === 'QuanTri') {
        const stoAdminLogin: string = JSON.stringify(data);
        localStorage.setItem('stoAdminLogin', stoAdminLogin);
        Swal.fire('Successful!', 'Welcome to Admin Panel!', 'success').then(() => {
          this.router.navigate(['/admin']);
        })
      }
      else {
        Swal.fire('Warning!', 'Username or password incorrect!', 'warning');
      }
    });
  }

}
