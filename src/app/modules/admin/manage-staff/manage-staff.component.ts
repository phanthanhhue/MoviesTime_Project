import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/_core/models/staff';
import { StaffService } from 'src/app/_core/services/staff.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})
export class ManageStaffComponent implements OnInit {

  public staffList: Staff[] = [];

  constructor(private staffService: StaffService, private location: Location) { }

  ngOnInit() {
    this.staffService.getStaffList().subscribe(
      (data) => {
        this.staffList = data;
      }
    )
  }

  AddStaff(
    staffID: number,
    userName: string,
    fullName: string,
    age: number,
    phoneNumber: number,
    email: string,
    is_admin: string,
  ): void {
    let staff: Staff = {
      StaffID: staffID,
      UserName: userName,
      FullName: fullName,
      Age: age,
      PhoneNumber: phoneNumber,
      Email: email,
      MaLoaiNguoiDung: is_admin,
    };
    this.staffService.addStaff(staff);
    this.location.back();
  }
}
