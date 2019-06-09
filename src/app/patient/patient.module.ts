import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatientListComponent} from './patient-list/patient-list.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [
      PatientListComponent
  ],
  imports: [
      CommonModule,
      IonicModule
  ]
})
export class PatientModule { }
