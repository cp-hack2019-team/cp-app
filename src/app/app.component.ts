import {Component} from '@angular/core';

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
    console.log('App');
    menuController.enable(loginService.isAuthorized, 'main');

    // Handle menu state on login
    loginService.$isAuthorized.subscribe(isAuthorized => {
      console.log('isAuthorized: ' + isAuthorized + ' userId: ' + this.loginService.getUserId());
      menuController.enable(isAuthorized, 'main');

      if (this.loginService.isAuthorized && this.loginService.getUserId() != null) {
        console.log('User already authorized');
        this.router.navigate(['/users/' + this.loginService.getUserId()]);
        this.menuController.enable(true, 'main');
      }
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
