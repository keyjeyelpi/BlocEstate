import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLoggedInPage } from './menu-logged-in.page';

describe('MenuLoggedInPage', () => {
  let component: MenuLoggedInPage;
  let fixture: ComponentFixture<MenuLoggedInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLoggedInPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLoggedInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
