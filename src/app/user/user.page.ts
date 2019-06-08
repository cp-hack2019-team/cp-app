import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
	pills = [{name: "alalala"}, {name: "lalal"}];

  constructor(private router: Router ) {}

  ngOnInit() {
  }
  
  navPills() {
	  this.router.navigate(['/pills']);
  }
  
  navWatchers() {
	  this.router.navigate(['/watchers']);
  }

}
