import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PagesModule } from './modules/pages/pages.module';
import { AdminModule } from './modules/admin/admin.module';
import { CheckAdminSignInGuard } from './_core/guards/check-admin-sign-in.guard';



const appRoutes: Routes = [
  { path: 'home', loadChildren: () => PagesModule },
  { path: '', loadChildren: () => PagesModule },
  { path: 'admin', loadChildren: () => AdminModule},
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
