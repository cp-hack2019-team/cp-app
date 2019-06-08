import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-watchers',
  templateUrl: './watchers.page.html',
  styleUrls: ['./watchers.page.scss'],
})
export class WatchersPage implements OnInit {
	watchers = [{name: "alalala"}, {name: "lalal"}];

  constructor(private router: Router ) { }

  ngOnInit() {
  }
  
  toUser() {
	  this.router.navigate(['/user']);
  }

}
