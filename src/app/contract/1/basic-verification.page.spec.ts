import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicVerificationPage } from './basic-verification.page';

describe('BasicVerificationPage', () => {
  let component: BasicVerificationPage;
  let fixture: ComponentFixture<BasicVerificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicVerificationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
