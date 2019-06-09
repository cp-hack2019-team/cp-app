import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ReceiptListElement} from '../interfaces/receipt/receipt-list-element';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class PillsResolverService implements Resolve<void | ReceiptListElement[]> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<void | ReceiptListElement[]> {
    const id = route.paramMap.get('id');
    console.log('Resolver: userId = ' + id);

    return this.userService.getUserReceiptList(id)
        .then(res => {
          return res;
        });
  }
}
