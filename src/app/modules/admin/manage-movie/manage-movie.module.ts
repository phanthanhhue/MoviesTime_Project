import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { ManageMovieComponent } from './manage-movie/manage-movie.component';
import { Routes, RouterModule } from '@angular/router';

const movieRouter: Routes = [
  {
    path: '', component: ManageMovieComponent, children: [
      { path: 'manage-movie', component: ManageMovieComponent },
      { path: 'add-movie', component: AddMovieComponent },
      { path: 'update-movie', component: UpdateMovieComponent ,}
    ]
  }
]

@NgModule({
  declarations: [
    AddMovieComponent, 
    UpdateMovieComponent, 
    ManageMovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(movieRouter),
  ]
})
export class ManageMovieModule { }
