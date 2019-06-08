import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Platform} from '@ionic/angular';
import {LoginService} from '../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {

    constructor(
        private router: Router,
        private platform: Platform,
        private loginService: LoginService,
    ) {
    }

    async doLogin() {
        this.loginService.login();
        this.router.navigate(['/user']);
    }

}
