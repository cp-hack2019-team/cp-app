import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeViewPage } from './recipe-view.page';

describe('RecipeViewPage', () => {
  let component: RecipeViewPage;
  let fixture: ComponentFixture<RecipeViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
