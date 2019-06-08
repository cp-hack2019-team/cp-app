import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Doctor} from '../../interfaces/doctor';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent implements OnInit {

    patients: Doctor[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.route.data
            .subscribe((data: { doctors: Doctor[] }) => {
                this.patients = data.doctors;
            });
    }

}
