import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../_interfaces/user';
import {RestService} from '../_services/rest.service';
import {Patient} from '../_interfaces/patient';
import {Doctor} from '../_interfaces/doctor';

@Injectable({
  providedIn: 'root'
})

export class UserService extends RestService {
    private baseUrl = 'users';

    constructor(public http: HttpClient) {
        super(http);
    }

    getUsers(): Promise<User[]> {
        return this.getRequest(this.baseUrl).then((res: User[]) => {
           console.log(res); // log
           return res;
        });
    }

    getUser(id: number | string): Promise<User> {
        // return this.getUsers().pipe(
        //     map(users => users.find(user => user.uid === id))
        // );
        return this.getRequest(`${this.baseUrl}/${id}`).then((res: User) => {
            console.log(res); // log
            return res;
        });
    }

    getUserPatients(id: number | string): Promise<Patient[]> {
        return this.getRequest(`${this.baseUrl}/${id}/patients`).then((res: Patient[]) => {
            console.log(res); // log
            return res;
        });
    }

    getUserDoctors(id: number | string): Promise<Doctor[]> {
        return this.getRequest(`${this.baseUrl}/${id}/doctors`).then((res: Doctor[]) => {
            console.log(res); // log
            return res;
        });
    }
}
