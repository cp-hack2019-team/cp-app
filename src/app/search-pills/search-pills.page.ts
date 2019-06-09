import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestService} from '../services/rest.service';

@Component({
  selector: 'app-search-pills',
  templateUrl: './search-pills.page.html',
  styleUrls: ['./search-pills.page.scss'],
})
export class SearchPillsPage implements OnInit {

  constructor(private route: ActivatedRoute,
              private restService: RestService) { }

  requestedUserId: string;


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.requestedUserId = params['requestedUserId'];
    });

    const body = {
      prefix: ''
    };
    this.restService.postRequest('medicines', body).then(data => {

    });
  }

}
