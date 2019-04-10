import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }
  public signIn(userName: string, password: string): Observable<any> {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${userName}&matkhau=${password}`;
    const header: Headers = new Headers();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, null);
    return observable;
  }

  public signUp(user: User): Observable<any> {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    const header: HttpHeaders = new HttpHeaders();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, user, { headers: header });
    return observable;
  }

  public getUserList(): Observable<User[]> {
    let response: any = this.http.get('http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom={{GP05}}')
    return response;
  }
}
