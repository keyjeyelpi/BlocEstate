import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EksPage } from './eks.page';

describe('EksPage', () => {
  let component: EksPage;
  let fixture: ComponentFixture<EksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
