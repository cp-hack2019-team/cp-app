import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {RestService} from './rest.service';
import {StorageService} from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    public $isAuthorized = new Subject<boolean>();
    isAuthorized = false;
    userId = null;
    token = null;

    constructor(private storageService: StorageService,
                private restService: RestService) {
        console.log('Here constructor' + this.isAuthorized);
        this.isStorageAuthorized().then(res => {
            this.isAuthorized = res;
            this.storageService.get('userId').then(storedUserId => {
                this.userId = storedUserId;
                this.$isAuthorized.next(this.isAuthorized);
            });
        });
    }

    public login(login, password) {
        return new Promise((resolve, reject) => {
            const body = {
                username: login,
                password: password
            };
            this.restService.postRequest('auth/signin', body).then((data: {token: string, id: string}) => {
                this.isAuthorized = true;
                this.$isAuthorized.next(this.isAuthorized);
                this.storageService.set('token', data.token);
                this.token = data.token;
                this.userId = data.id;
                this.storageService.set('userId', data.id);
                resolve();
            }).catch(err => {
                console.error(err);
                reject(err);
            });
        });
    }

    public logout() {
        this.isAuthorized = false;
        this.storageService.remove('token');
        this.storageService.remove('userId');
        this.$isAuthorized.next(this.isAuthorized);
    }

    public getUserId() {
        return this.userId;
    }

    public getToken() {
        return this.token;
    }

    async isStorageAuthorized(): Promise<boolean> {
        return await this.storageService.get('token') != null && this.storageService.get('userId') != null;
    }

}
