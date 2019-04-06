import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MovieService } from 'src/app/_core/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  subParam: Subscription;
  movie: any = {};

  constructor(private movieService: MovieService, private atvRoute: ActivatedRoute, private title: Title) {

  }

  ngOnInit() {
    this.subParam = this.atvRoute.queryParams.subscribe((data) => {
      this.getMovieDetails(data.MaPhim);
      this.title.setTitle(data.TenPhim)
    });
  }


  getMovieDetails(maPhim) {
    this.movieService.getMovieDetails(maPhim).subscribe((data) => {
      this.movie = data;
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.subParam) {
      this.subParam.unsubscribe();
    }
  }
}
