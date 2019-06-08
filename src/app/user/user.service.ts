import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';
import {RestService} from '../services/rest.service';
import {Patient} from '../interfaces/patient';
import {Doctor} from '../interfaces/doctor';
import {StorageService} from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})

export class UserService extends RestService {
    private baseUrl = 'users';

    constructor(
        public http: HttpClient,
        protected storageService: StorageService
    ) {
        super(http, storageService);
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
