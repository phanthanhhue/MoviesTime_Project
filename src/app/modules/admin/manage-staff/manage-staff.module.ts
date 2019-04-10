import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { Routes, RouterModule } from '@angular/router';

const staffRouter: Routes = [
  {
    path: '', component: ManageStaffComponent, children: [
      { path: 'manage-staff', component: ManageStaffComponent },
      { path: 'add-staff', component: AddStaffComponent },
      { path: 'update-staff', component: UpdateStaffComponent ,}
    ]
  }
]

@NgModule({
  declarations: [
    ManageStaffComponent, 
    AddStaffComponent, 
    UpdateStaffComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(staffRouter),
  ]
})
export class ManageStaffModule { }
