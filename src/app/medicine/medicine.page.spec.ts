import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinePage } from './medicine.page';

describe('MedicinePage', () => {
  let component: MedicinePage;
  let fixture: ComponentFixture<MedicinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
