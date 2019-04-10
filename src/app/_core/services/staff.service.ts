import { Injectable } from '@angular/core';
import { Staff } from '../models/staff';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private staffList: Staff[] = [
    { StaffID: 2, FullName: 'Phan Thanh Huệ', Age: 29 },
  ];

  constructor(private http: HttpClient) { }

  public adminLogin(userName: string, password: string): Observable<any> {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${userName}&matkhau=${password}`;
    const header: Headers = new Headers();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, null)
    return observable;
  }

  public getStaffList(): Observable<Staff[]> {
    return of(this.staffList);
  }

  public addStaff(staff: Staff): void {
    this.staffList.push(staff);
  }
}
