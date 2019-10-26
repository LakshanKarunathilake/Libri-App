import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookSearchView } from './book-search-view.component';

xdescribe('BookSearchView', () => {
  let component: BookSearchView;
  let fixture: ComponentFixture<BookSearchView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookSearchView],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
