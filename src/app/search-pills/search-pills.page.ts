import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {RestService} from '../services/rest.service';
import {Pill} from '../interfaces/pill';

@Component({
  selector: 'app-search-pills',
  templateUrl: './search-pills.page.html',
  styleUrls: ['./search-pills.page.scss'],
})
export class SearchPillsPage implements OnInit {

  constructor(private route: ActivatedRoute,
              private restService: RestService,
              private router: Router) { }

  requestedUserId: string;
  searchedPills: Pill[];

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.requestedUserId = params['requestedUserId'];
    });

    const params = {
      prefix: ''
    };
    this.restService.getRequest('medicines', params).then((data: {content: Pill[]}) => {
      this.searchedPills = data.content;
    });
  }

  addReceipt(pill: Pill) {
    console.log('Adding receipe');
    const navigationExtras: NavigationExtras = {
      queryParams: {
        requestedUserId: this.requestedUserId,
        pillId: pill.id
      },
    };
    this.router.navigate(['/recipe'], navigationExtras);
  }

}
