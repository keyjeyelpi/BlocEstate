import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { step-threePage } from './step-three.page';

describe('step-threePage', () => {
  let component: step-threePage;
  let fixture: ComponentFixture<step-threePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ step-threePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(step-threePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
