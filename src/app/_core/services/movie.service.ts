import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  @Output() seats = new EventEmitter();
  
  public getMovieList(): Observable<any[]> {
    let response: any = this.http.get('http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP05')
    return response;
  }
  public getMovieDetails(maPhim:number): Observable<any[]> {
    let response: any = this.http.get('http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim='+maPhim);
    return response;
  }
  public getTicketDetails(maLichChieu:number): Observable<any[]> {
    let response: any = this.http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`);
    return response;
  }
  public getTicket(ticketDetails:any) {
    let linkApi =`http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe`;
    const header: HttpHeaders = new HttpHeaders();
    header.append('Content-Type','application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, ticketDetails, {headers: header});
    return observable;
  }

  public addMovie(movie: any) {
    let linkApi = 'http://svcy2.myclass.vn/api/QuanLyPhim/ThemPhimMoi';
    const header: HttpHeaders = new HttpHeaders();
    header.append('Content-Type','application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, movie, {headers: header});
    console.log(movie);
    return observable;
    
  }

  public dropMovie(maPhim:number): Observable<any[]> {
    let response: any = this.http.delete('http://svcy2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim='+maPhim);
    return response;
  }


}
