import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  AddMovie(movieID: number, movieName: string, trailer: string, image: string, desc: string, groupID: string, releasedate: string, rate: number): void {
    let movie: any = {
      MaPhim : movieID,
      TenPhim: movieName,
      Trailer: trailer,
      HinhAnh: image,
      MoTa: desc,
      MaNhom: groupID,
      NgayKhoiChieu: releasedate,
      DanhGia: rate,	
    };
    this.movieService.addMovie(movie)
  }
}
