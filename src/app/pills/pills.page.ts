import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {UserService} from '../user/user.service';
import {LoginService} from '../services/login.service';

@Component({
    selector: 'app-pills',
    templateUrl: './pills.page.html',
    styleUrls: ['./pills.page.scss'],
})
export class PillsPage implements OnInit {

    pills = [{id: '12124'}, {id: '2222'}];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService,
                private loginService: LoginService) {
    }

    ngOnInit() {
        this.userService.getUserReceiptList(this.loginService.getUserId()).then(pills => this.pills = pills);

        /*this.route.data
            .subscribe((data: { pills: ReceiptListElement[] }) => {
                this.pills = data.pills;
            });*/
    }

    toUser() {
        this.router.navigate(['/users/']);
    }

    toRecipe(pill) {
        // TODO: uncomment navigating to receipt info
        //this.router.navigate(['/users/' + this.loginService.getUserId() + '/receipe/']);
    }

    addRecipe() {
        const navigationExtras: NavigationExtras = {
            queryParams: {
                requestedUserId: this.loginService.getUserId()
            }
        };
        this.router.navigate(['/search-pills'], navigationExtras);
    }

}
