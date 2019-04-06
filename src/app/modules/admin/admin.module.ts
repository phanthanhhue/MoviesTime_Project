import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { ManageMoviesComponent } from './manage-movies/manage-movies.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CheckAdminSignInGuard } from '../../_core/guards/check-admin-sign-in.guard';



const adminRoutes: Routes = [
        { path: 'admin-login', component: AdminLoginComponent },
  // {
  //   path: '', component: AdminTemplateComponent, children: [
  //     { path: 'manage-staff', component: ManageStaffComponent },
  //     { path: 'manage-user', component: ManageUsersComponent },
  //     { path: 'manage-movie', component: ManageUsersComponent },

  //   ]
  // },

]

@NgModule({
  declarations: [
    AdminTemplateComponent,
    ManageStaffComponent,
    ManageMoviesComponent,
    ManageUsersComponent,
    AdminLoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,
  ]
})
export class AdminModule { }
