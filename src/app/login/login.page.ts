import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {ToastService} from '../services/toast.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {

    constructor(
        private router: Router,
        private toastService: ToastService,
        public loginService: LoginService,
    ) {
    }

    login: string;
    password: string;

    async doLogin() {
        console.log('Login: ' + this.login + ', Password: ' + this.password);

        this.loginService.login(this.login, this.password).then(success => {
            console.log('Success login');
            console.log(this.loginService.getUserId())
            this.router.navigate(['/users/' + this.loginService.getUserId()]);
        }).catch(error => {
            console.log('Error login');
            this.toastService.presentToast(error.error.message);
        });
    }

}
