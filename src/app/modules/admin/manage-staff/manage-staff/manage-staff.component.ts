import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/_core/services/staff.service';
import { Staff } from 'src/app/_core/models/staff';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})
export class ManageStaffComponent implements OnInit {

  public staffList: Staff[] = []

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.staffService.getStaffList().subscribe((data) => {
      this.staffList = data;
    })
  }

}
