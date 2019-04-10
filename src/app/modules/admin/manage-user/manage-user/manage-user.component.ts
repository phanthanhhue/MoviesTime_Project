import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  public userList: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserList().subscribe((data) => {
      this.userList = data;
    })
  }

}
