import {Component, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {error} from 'selenium-webdriver';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {

    constructor(
        private router: Router,
        public loginService: LoginService,
    ) {
    }

    login: string;
    password: string;

    isTriedLogin = false;
    isSuccessLogin = false;
    loginError = '';

    async doLogin() {
        console.log('Login: ' + this.login + ', Password: ' + this.password);

        this.isTriedLogin = true;
        this.loginService.login(this.login, this.password).then(success => {
            this.isSuccessLogin = true;
            this.router.navigate(['/user']);
        }).catch(error => {
            this.isSuccessLogin = false;
            this.loginError = error.message;
        });
    }

}
