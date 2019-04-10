import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { Routes, RouterModule } from '@angular/router';

const userRouter: Routes = [
  {
    path: '', component: ManageUserComponent, children: [
      { path: 'manage-user', component: ManageUserComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'update-user', component: UpdateUserComponent ,}
    ]
  }
]

@NgModule({
  declarations: [
    UpdateUserComponent, 
    AddUserComponent, 
    ManageUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRouter),
  ]
})
export class ManageUserModule { }
