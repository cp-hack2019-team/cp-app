import { Injectable } from '@angular/core';
import {UserService} from '../user/user.service';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Patient} from '../interfaces/patient';
import {Observable, of} from 'rxjs';
import {Doctor} from '../interfaces/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorListResolverService implements Resolve<void | Doctor[]> {

    constructor(private userService: UserService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<void | Doctor[]> {
        const id = route.paramMap.get('id');

        return this.userService.getUserDoctors(id)
            .then(res => {
                console.log(res);
                return res;
            })
            .catch(err => {
                console.log(err);
            });
    }
}
