import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CheckAdminSignInGuard } from '../../_core/guards/check-admin-sign-in.guard';
import { ManageMovieModule } from './manage-movie/manage-movie.module';
import { ManageStaffModule } from './manage-staff/manage-staff.module';
import { ManageUserModule } from './manage-user/manage-user.module';



const adminRoutes: Routes = [
  { path: 'admin-login', component: AdminLoginComponent },
  {
    path: '', component: AdminTemplateComponent, canActivate: [CheckAdminSignInGuard], children: [
      { path: 'manage-movie', loadChildren:() => ManageMovieModule},
      { path: 'manage-staff', loadChildren:() => ManageStaffModule},
      { path: 'manage-user', loadChildren:() => ManageUserModule},
    ]
  },

]

@NgModule({
  declarations: [
    AdminTemplateComponent,
    AdminLoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,
  ]
})
export class AdminModule { }
