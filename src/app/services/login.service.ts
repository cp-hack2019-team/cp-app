import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Storage} from '@ionic/storage';
import {RestService} from './rest.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    public $isAuthorized = new Subject<boolean>();
    isAuthorized = false;

    constructor(private localStorage: Storage,
                private restService: RestService) {
        this.isAuthorized = this.isStorageAuthorized();
    }

    public login(login, password) {
        return new Promise((resolve, reject) => {
            const body = {
                username: login,
                password: password
            };
            this.restService.postRequest('auth/signin', body).then((data: {token: string}) => {
                this.isAuthorized = true;
                this.onAuthorizedUpdate();
                localStorage.setItem('token', data.token);
                resolve();
            }).catch(err => {
                console.error(err);
                reject(err);
            });
        });
    }

    public logout() {
        this.isAuthorized = false;
        this.onAuthorizedUpdate();
    }

    private onAuthorizedUpdate() {
        this.setStorageAuthorized();
        this.$isAuthorized.next(this.isAuthorized);
    }

    private isStorageAuthorized(): boolean {
        return localStorage.getItem('login') === 'true';
    }

    private setStorageAuthorized() {
        localStorage.setItem('login', this.isAuthorized ? 'true' : 'false');
    }

}
