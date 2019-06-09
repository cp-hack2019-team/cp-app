import { Component, OnInit } from '@angular/core';
import {Pill} from '../interfaces/pill';
import {ActivatedRoute, Router} from '@angular/router';
import {RestService} from '../services/rest.service';
import {ReceiptListElement} from '../interfaces/receipt/receipt-list-element';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.page.html',
  styleUrls: ['./recipe-view.page.scss'],
})
export class RecipeViewPage implements OnInit {

  times: any;
  receipt: ReceiptListElement;
  data: any;
  pillId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
        .subscribe((data: { recipe: ReceiptListElement }) => {
          console.log(data);
          this.receipt = data.recipe;
        });
  }

}
