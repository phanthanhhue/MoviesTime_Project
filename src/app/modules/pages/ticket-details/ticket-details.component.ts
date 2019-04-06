import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/_core/services/movie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  constructor(private atvRoute: ActivatedRoute, private movieService: MovieService, private router: Router) { }

  seatsList: any[] = [];
  bookedSeatsList: any[] = [];
  showtimesID: any = 0;

  ngOnInit() {
    this.atvRoute.params.subscribe((data) => {
      this.showtimesID = data.id;
      console.log(data.id);
      this.GetTicketDetails(data.id);
    })
    this.movieService.seats.subscribe((bookingSeats) => {
      if (bookingSeats.BookingSeats) {
        this.bookedSeatsList.push(bookingSeats);
      }
      else {
        for (let i = 0; i < this.bookedSeatsList.length; i++) {
          if (bookingSeats.MaGhe === this.bookedSeatsList[i].MaGhe) {
            this.bookedSeatsList.splice(i, 1);
          }
        }
      }
      // console.log(this.bookedSeatsList);
    })
  }

  GetTicketDetails(showtimesID: number) {
    this.movieService.getTicketDetails(showtimesID).subscribe((data: any) => {
      if (typeof data === 'object') {
        console.log(data);
        this.seatsList = data.DanhSachGhe;

      }
    })
  }
  bookingSeat() {
    let userName = '';
    if (localStorage.getItem('userLogin')) {
      const userLogin: any = JSON.parse(localStorage.getItem('userLogin'));
      userName = userLogin.TaiKhoan;
    }

    if (userName != '') {
      if (this.bookedSeatsList.length >= 1) {
        let seatInfo: any = {
          "MaLichChieu": this.showtimesID,
          "TaiKhoanNguoiDung": userName,
          "DanhSachVe": this.bookedSeatsList
        }
        this.movieService.getTicket(seatInfo).subscribe((data) => {
          if (typeof data == 'string') {
            Swal.fire('Successfull', 'Congratulation! You booked seats successful!', 'success').then(() => {
              location.reload();
            })
          }
        })
      }
      else {
        Swal.fire('Warning', 'You are not picked the seat! Please pick a seat!', 'warning');
      }
    }
    else {
      Swal.fire('Warning', 'You must be log in first!', 'warning').then(() => {
        this.router.navigate(['/sign-in'])
      });
    }
  }
}
