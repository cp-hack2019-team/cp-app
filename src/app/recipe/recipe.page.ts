import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RestService } from '../services/rest.service';
import {Pill} from '../interfaces/pill';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

	times : any;
	recipeData = {
		name : 'Фуфломицин',
		type : 'таблетки',
		description : 'Длинное хорошее лекарство',
		startDate : '', length : '', amount : '', frequency : '', to : ''
	};
	sub : any;
	data : any;
	pillId : any;
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
			this.recipeData = data;
		});
	}

	createRecipe() {

	}
	
	changeFr(frequency) {
		this.times = new Array(+frequency);
	}

}

