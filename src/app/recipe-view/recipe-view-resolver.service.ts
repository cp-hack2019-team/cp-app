import { Injectable } from '@angular/core';
import {UserService} from '../user/user.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Recipe} from '../interfaces/receipt/recipe';
import {ReceiptListElement} from '../interfaces/receipt/receipt-list-element';

@Injectable({
  providedIn: 'root'
})
export class RecipeViewResolverService {

  constructor(private userService: UserService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<void | ReceiptListElement> {
    const userId = route.paramMap.get('id');
    const recipeId = route.paramMap.get('rid');

    return this.userService.getRecipe(userId, recipeId)
        .then(res => {
          console.log(res);
          return res;
        })
        .catch(err => {
          console.log(err);
        });
  }
}
