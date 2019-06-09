import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RestService } from '../services/rest.service';
import {Pill} from '../interfaces/pill';
import {Recipe} from '../interfaces/receipt/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

	times: any;
	pillData: Pill;
	recipeData: Recipe = { startDate : '', length : '', amount : '', frequency : '', to : ''};
	sub: any;
	data: any;
	pillId: any;
	requestedUserId: string;

	constructor(private route: ActivatedRoute,
				private restService: RestService) {
	}

	ngOnInit() {
		this.sub = this.route.queryParams.subscribe(params => {
			this.pillId = params['pillId'];
			this.requestedUserId = params['requestedUserId'];

			this.initPillData();
		});
	}

	private initPillData() {
		this.restService.getRequest('medicines/' + this.pillId, null).then((data: Pill) => {
			this.pillData = data;
		});
	}

	createRecipe() {
		console.log(this.times);
		const body = {
			dose: this.recipeData.frequency,
			medicineId: this.pillId,
			stock: this.recipeData.amount,
			schedule: {
				times: this.times
			}
		};
		this.restService.postRequest('users/' + this.requestedUserId + '/recipe', body, null);
	}
	
	changeFr(frequency) {
		this.times = new Array(+frequency);
		console.log(this.times);
	}

}

