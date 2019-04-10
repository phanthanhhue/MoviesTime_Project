import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.css']
})
export class PageTemplateComponent implements OnInit {
  show: boolean = false
  constructor(private router: Router) { }

  ngOnInit() {
  }

  SignOut() {
      localStorage.clear();
      this.router.navigate(['/home']);
      return this.show = true
  }
}