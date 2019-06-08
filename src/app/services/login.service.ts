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

    constructor(private storageService: StorageService,
                private restService: RestService) {
        this.isAuthorized = this.isStorageAuthorized();
    }

    public login(login, password) {
        return new Promise((resolve, reject) => {
            const body = {
                username: login,
                password: password
            };
            this.restService.postRequest('auth/signin', body).then((data: {token: string, id: string}) => {
                this.isAuthorized = true;
                this.onAuthorizedUpdate();
                this.storageService.set('token', data.token);
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
        this.onAuthorizedUpdate();
    }

    public getUserId() {
        return this.storageService.get('userId');
    }

    private onAuthorizedUpdate() {
        this.setStorageAuthorized();
        this.$isAuthorized.next(this.isAuthorized);
    }

    private isStorageAuthorized(): boolean {
        return this.storageService.get('login') === 'true';
    }

    private setStorageAuthorized() {
        this.storageService.set('login', this.isAuthorized ? 'true' : 'false');
    }

}
