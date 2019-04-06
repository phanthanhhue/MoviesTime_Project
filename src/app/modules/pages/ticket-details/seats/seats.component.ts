import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  @Input() seats:any = {};
  bookingSeats: boolean = false;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  bookASeat() {
    this.bookingSeats = !this.bookingSeats;
    let bookedSeats = {
      MaGhe:this.seats.MaGhe,
      GiaVe:this.seats.MaGhe,
      BookingSeats:this.bookingSeats,
    }
    this.movieService.seats.emit(bookedSeats);
    // console.log(this.seats.TenGhe)
  }

}
