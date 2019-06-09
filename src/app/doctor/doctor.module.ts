import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DoctorListComponent} from './doctor-list/doctor-list.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [
      DoctorListComponent
  ],
  imports: [
      CommonModule,
      IonicModule
  ]
})
export class DoctorModule { }
