import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
	
	recipeData: any;

  constructor(private router: Router,
			public rest: RestService) { }

  ngOnInit() {
  }
    
  getRecipe(recipeId) {
		this.rest.getEvent().then((res) => {
			this.recipeData = res;
			console.log(this.recipeData);
		}, (err) => {
			console.log(err);
		});
  }

}
