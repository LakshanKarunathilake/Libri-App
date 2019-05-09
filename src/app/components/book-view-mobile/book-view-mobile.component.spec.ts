import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookViewMobilePage } from './book-view-mobile.page';

describe('BookViewMobilePage', () => {
  let component: BookViewMobilePage;
  let fixture: ComponentFixture<BookViewMobilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookViewMobilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookViewMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
