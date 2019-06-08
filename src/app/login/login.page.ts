import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, LoadingController, Platform} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {

    constructor(
        public loadingController: LoadingController,
        private router: Router,
        private platform: Platform,
        public alertController: AlertController
    ) {
    }

    async doLogin() {
		this.router.navigate(['/user']);
        /*const loading = await this.loadingController.create({
            message: 'Please wait...'
        });
        this.presentLoading(loading);

        // the permissions your facebook app needs from the user
        const permissions = ['public_profile', 'email'];

        this.fb.login(permissions)
            .then(response => {
                const userId = response.authResponse.userID;
                // Getting name and email properties
                // Learn more about permissions in https://developers.facebook.com/docs/facebook-login/permissions

                this.fb.api('/me?fields=name,email', permissions)
                    .then(user => {
                        user.picture = 'https://graph.facebook.com/' + userId + '/picture?type=large';
                        // now we have the users info, let's save it in the NativeStorage
                        this.nativeStorage.setItem('facebook_user',
                            {
                                name: user.name,
                                email: user.email,
                                picture: user.picture
                            })
                            .then(() => {
                                this.router.navigate(['/user']);
                                loading.dismiss();
                            }, error => {
                                console.log(error);
                                loading.dismiss();
                            });
                    });
            }, error => {
                console.log(error);
                if (!this.platform.is('cordova')) {
                    this.presentAlert();
                }
                loading.dismiss();
            });*/
    }

    async presentLoading(loading) {
        return await loading.present();
    }

}
