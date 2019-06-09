import {Component} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {LoginService} from './services/login.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {StorageService} from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  private baseUrl = '/users/';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginService: LoginService,
    private menuController: MenuController,
    private router: Router,
    private storageService: StorageService
  ) {
    this.initializeApp();
    menuController.enable(loginService.isAuthorized, 'main');

    // Handle menu state on login
    loginService.$isAuthorized.subscribe(isAuthorized => {
      console.log('isAuthorized: ' + isAuthorized + ' userId: ' + this.loginService.getUserId());
      menuController.enable(isAuthorized, 'main');
    });

    // Check login state on start
    this.loginService.isStorageAuthorized().then( isStorageAuthorized => {
      if (isStorageAuthorized) {
        console.log('User already authorized');
        this.storageService.get('userId').then(userId => {
          if (this.router.url === '/' || this.router.url === '/login') {
              // Redirect to default page
              this.router.navigate(['/users/' + userId]);
          }
          this.menuController.enable(true, 'main');
        });
      } else {
        this.logout();
      }
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  mainPage() {
    this.router.navigate([this.baseUrl + this.loginService.getUserId()]);
  }

  dashboardPage() {
    // TODO: Uncomment when will fix the routing
    // this.router.navigate([this.baseUrl + this.loginService.getUserId() + '/dashboard']);
    this.router.navigate(['/dashboard']);
  }

  pillsPage() {
    // TODO: Uncomment when will fix the routing
    // this.router.navigate([this.baseUrl + this.loginService.getUserId() + '/pills']);
    this.router.navigate(['/pills']);
  }

  watchersPage() {
    this.router.navigate([this.baseUrl + this.loginService.getUserId() + '/doctors']);
  }

  watchingPage() {
    this.router.navigate([this.baseUrl + this.loginService.getUserId() + '/patients']);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
