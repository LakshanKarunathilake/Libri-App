import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksearchPage } from './booksearch.page';
import { BookService } from '../services/book/book.service';
import { BookServiceStub } from '../Stubs';

describe('BooksearchPage', () => {
  let component: BooksearchPage;
  let fixture: ComponentFixture<BooksearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BooksearchPage],
      providers: [{ provide: BookService, useClass: BookServiceStub }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
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
