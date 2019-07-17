import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkMoneyPage } from './talk-money.page';

describe('TalkMoneyPage', () => {
  let component: TalkMoneyPage;
  let fixture: ComponentFixture<TalkMoneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkMoneyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkMoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
