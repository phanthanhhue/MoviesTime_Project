import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movieList: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovieList().subscribe(
      (data) => {
        this.movieList = data;
      }
    )
  }

}
