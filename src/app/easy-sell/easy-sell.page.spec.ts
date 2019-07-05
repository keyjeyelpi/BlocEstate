import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasySellPage } from './easy-sell.page';

describe('EasySellPage', () => {
  let component: EasySellPage;
  let fixture: ComponentFixture<EasySellPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasySellPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasySellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
