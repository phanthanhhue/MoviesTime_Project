import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  public movieList: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovieList().subscribe((data) => {
      this.movieList = data;
    })
  }

}
