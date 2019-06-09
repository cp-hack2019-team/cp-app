import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
	
	todoData = [{title : 'Сегодня, 9 июня', description : 'На сегодня всё'},{title : 'Завтра, 10 июня', description : 'Поход к врачу', time : '15:00'}];

  constructor() { }

  ngOnInit() {
  }

}
