import {Component, Input, Output} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {LoginService} from './services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Моя страница',
      url: '/user',
      icon: 'home'
    },
    {
      title: 'Users',
      url: '/users',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginService: LoginService,
    private menuController: MenuController,
    private router: Router,
  ) {
    this.initializeApp();
    // menuController.enable(loginService.isAuthorized, 'main');

    // Handle menu state on login
    loginService.$isAuthorized.subscribe(isAuthorized => {
        console.log('isAuthorized: ' + isAuthorized);
        menuController.enable(isAuthorized, 'main');
        // if (isAuthorized) {
            // this.router.navigate(['/users/' + this.loginService.getUserId()]);
        // }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
