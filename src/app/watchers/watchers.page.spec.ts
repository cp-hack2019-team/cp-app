import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchersPage } from './watchers.page';

describe('WatchersPage', () => {
  let component: WatchersPage;
  let fixture: ComponentFixture<WatchersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
