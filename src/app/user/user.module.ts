import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {UserListComponent} from './user-list/user-list.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {IonicModule} from '@ionic/angular';
import {PatientModule} from '../patient/patient.module';
import {DoctorModule} from '../doctor/doctor.module';
import {PillsPageModule} from '../pills/pills.module';

@NgModule({
    declarations: [
        UserListComponent,
        UserDetailComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        UserRoutingModule,
        PatientModule,
        DoctorModule,
        // PillsPageModule
    ]
})
export class UserModule { }
