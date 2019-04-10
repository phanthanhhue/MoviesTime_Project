import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';

@Component({
  selector: 'app-manage-movie',
  templateUrl: './manage-movie.component.html',
  styleUrls: ['./manage-movie.component.css']
})
export class ManageMovieComponent implements OnInit {

  public movieList: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovieList().subscribe((data) => {
      this.movieList = data;
    });
  }

}
