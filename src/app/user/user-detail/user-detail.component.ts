import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {User} from '../../_interfaces/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
    user: User;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
  ) { }

    ngOnInit() {
        this.route.data
            .subscribe((data: { user: User }) => {
                this.user = data.user;
            });
    }

}
