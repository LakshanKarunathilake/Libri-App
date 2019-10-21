import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingsPage } from './borrowings.page';

describe('BorrowingsPage', () => {
  let component: BorrowingsPage;
  let fixture: ComponentFixture<BorrowingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
