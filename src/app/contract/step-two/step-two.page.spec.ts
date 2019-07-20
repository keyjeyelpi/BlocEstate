import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigningPartiesPage } from './step-two.page';

describe('SigningPartiesPage', () => {
  let component: SigningPartiesPage;
  let fixture: ComponentFixture<SigningPartiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigningPartiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigningPartiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
