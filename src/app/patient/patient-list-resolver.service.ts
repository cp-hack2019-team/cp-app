import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Patient} from '../interfaces/patient';
import {UserService} from '../user/user.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientListResolverService implements Resolve<void | Patient[]> {

    constructor(private userService: UserService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<void | Patient[]> {
        const id = route.paramMap.get('id');

        return this.userService.getUserPatients(id)
            .then(res => {
              console.log(res);
              return res;
            })
            .catch(err => {
              console.log(err);
            });
    }
}
