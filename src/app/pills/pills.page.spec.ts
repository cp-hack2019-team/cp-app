import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsPage } from './pills.page';

describe('PillsPage', () => {
  let component: PillsPage;
  let fixture: ComponentFixture<PillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
