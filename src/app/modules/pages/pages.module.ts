import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTemplateComponent } from './page-template/page-template.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { ContactComponent } from './contact/contact.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { SeatsComponent } from './ticket-details/seats/seats.component';
import { FormsModule } from '@angular/forms';
import { CheckSaveFormGuard } from 'src/app/_core/guards/check-save-form.guard';
import { CheckSignInGuard } from 'src/app/_core/guards/check-sign-in.guard';


const pageRoutes: Routes = [
  {
    path: '', component: PageTemplateComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'movie-list', component: MoviesListComponent },
      { path: 'movie-details', component: MovieDetailsComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent, canDeactivate: [CheckSaveFormGuard] },
      { path: 'ticket-details/:id', component: TicketDetailsComponent }

    ]
  }
]

@NgModule({
  declarations: [
    PageTemplateComponent,
    HomeComponent,
    ContactComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    SignInComponent,
    SignUpComponent,
    TicketDetailsComponent,
    SeatsComponent,
  ],
  imports: [
    RouterModule.forChild(pageRoutes),
    CommonModule,
    FormsModule,
  ]
})
export class PagesModule { }
