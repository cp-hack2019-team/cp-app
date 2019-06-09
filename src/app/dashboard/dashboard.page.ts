import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
	
	pills = [{id: '12124'}, {id: '2222'}];


  constructor(private userService: UserService,
                private loginService: LoginService) { }

    ngOnInit() {
        this.userService.getUserReceiptList(this.loginService.getUserId()).then(pills => this.pills = pills);
		console.log(this.pills);
    }

}
