import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    public $isAuthorized = new Subject<boolean>();
    isAuthorized = false;

    constructor(private localStorage: Storage) {
        this.isAuthorized = this.isStorageAuthorized();
    }

    public login() {
        this.isAuthorized = true;
        this.onAuthorizedUpdate();
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
