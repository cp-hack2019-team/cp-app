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

    constructor(private storageService: StorageService,
                private restService: RestService) {
        this.isStorageAuthorized().then(res => this.isAuthorized = res);
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
        this.onAuthorizedUpdate();
    }

    public getUserId() {
        return this.userId;
    }

    // public async getUserId() {
    //     return await this.storageService.get('userId');
    // }

    private onAuthorizedUpdate() {
        this.setStorageAuthorized();
        this.$isAuthorized.next(this.isAuthorized);
    }

    private async isStorageAuthorized(): Promise<boolean> {
        return await this.storageService.get('login') === 'true';
    }

    private setStorageAuthorized() {
        this.storageService.set('login', this.isAuthorized ? 'true' : 'false');
    }

}
