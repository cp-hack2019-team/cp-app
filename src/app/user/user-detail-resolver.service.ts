import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {User} from '../interfaces/user';
import {UserService} from './user.service';
import {EMPTY, Observable, of} from 'rxjs';
import {mergeMap, take} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDetailResolverService implements Resolve<void | User> {

    constructor(private userService: UserService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<void | User> {
        const id = route.paramMap.get('id');

        return this.userService.getUser(id)
            .then(res => {
                console.log(res);
                return res;
            })
            .catch(err => {
                console.log(err);
            });
    }
}
