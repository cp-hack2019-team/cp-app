import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
	
	times : any;
	recipeData = {name : 'Фуфломицин', type : 'таблетки', description : 'Длинное хорошее лекарство', startDate : '', length : '', amount : '', frequency : '', to : ''};
	sub : any;
	data : any;
	medicineId : any;

	constructor(private route: ActivatedRoute,
			public rest: RestService) { 
	}

	ngOnInit() {
		this.sub = this.route.queryParams.subscribe(params => {
			this.medicineId = params['medicineId']; 
		});
		console.log(this.medicineId);
		this.getMedicine(this.medicineId);
	}
  
	createRecipe() {
		console.log(this.times);
	}
	
	changeFr(frequency) {
		this.times = new Array(+frequency);
	}
    
	getMedicine(medicineId) {
		//this.rest.getMedicine(medicineId).then((res) => {
		//	this.data = res;
		//	console.log(this.data);
		//}, (err) => {
		//	console.log(err);
		//});
	}

}

