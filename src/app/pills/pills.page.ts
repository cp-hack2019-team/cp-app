import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pills',
  templateUrl: './pills.page.html',
  styleUrls: ['./pills.page.scss'],
})
export class PillsPage implements OnInit {
	pills = [{name: "alalala", reception: "3р/д"}, {name: "lalal"}];

  constructor(private router: Router ) { }

  ngOnInit() {
  }
  
  toUser() {
	  this.router.navigate(['/user']);
  }

}
