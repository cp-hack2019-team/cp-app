import { Component, OnInit } from '@angular/core';
import {Patient} from '../../_interfaces/patient';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
})
export class PatientListComponent implements OnInit {
  patients: Patient[];

  constructor(
      private route: ActivatedRoute,
      private router: Router,
  ) { }

  ngOnInit() {
      this.route.data
          .subscribe((data: { patients: Patient[] }) => {
              console.log(data);
              this.patients = data.patients;
          });
  }
}
