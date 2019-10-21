import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleListPage } from './collapsible-list.page';

describe('CollapsibleListPage', () => {
  let component: CollapsibleListPage;
  let fixture: ComponentFixture<CollapsibleListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsibleListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
