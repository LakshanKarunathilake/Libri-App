import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksearchPage } from './booksearch.page';

xdescribe('BooksearchPage', () => {
  let component: BooksearchPage;
  let fixture: ComponentFixture<BooksearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
