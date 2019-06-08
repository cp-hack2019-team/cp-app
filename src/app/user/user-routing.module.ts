import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailResolverService} from './user-detail-resolver.service';
import {UserListComponent} from './user-list/user-list.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {PatientListComponent} from '../patient/patient-list/patient-list.component';
import {DoctorListComponent} from '../doctor/doctor-list/doctor-list.component';
import {PatientListResolverService} from '../patient/patient-list-resolver.service';
import {DoctorListResolverService} from '../doctor/doctor-list-resolver.service';
import {PillsPage} from '../pills/pills.page';
import {PillsResolverService} from '../pills/pills-resolver.service';

const userRoutes: Routes = [
    {
        path: 'users',
        component: UserListComponent,
    },
    {
                path: 'users/:id',
                component: UserDetailComponent,
                // canDeactivate: [CanDeactivateGuard],
                resolve: {
                    user: UserDetailResolverService
                },
                children: [
                    {
                        path: 'patients',
                        component: PatientListComponent,
                        resolve: {
                            patients: PatientListResolverService
                        }
                    },
                    {
                        path: 'doctors',
                        component: DoctorListComponent,
                        resolve: {
                            patients: DoctorListResolverService
                        }
                    }
                    /*{
                        path: 'pills',
                        component: PillsPage,
                        resolve: {
                            patients: PillsResolverService
                        }
                    }*/
                ]
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }
