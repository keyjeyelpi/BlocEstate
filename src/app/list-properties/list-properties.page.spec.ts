import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropertiesPage } from './list-properties.page';

describe('ListPropertiesPage', () => {
  let component: ListPropertiesPage;
  let fixture: ComponentFixture<ListPropertiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPropertiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPropertiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
