import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookSearchView } from './book-search-view.component';
import { BookServiceStub } from 'src/app/Stubs';
import { BookService } from 'src/app/services/book/book.service';
import { By } from '@angular/platform-browser';
import { ModalController, AngularDelegate } from '@ionic/angular';

describe('BookSearchView', () => {
  let component: BookSearchView;
  let fixture: ComponentFixture<BookSearchView>;
  const book = {
    abstract: 'abstract',
    url: '',
    biblioitemnumber: '',
    author: 'author',
    isbn: '',
    biblionumber: '',
    title: 'title',
    copyrightdate: ''
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookSearchView],
      providers: [
        ModalController,
        AngularDelegate,
        { provide: BookService, useClass: BookServiceStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchView);
    component = fixture.componentInstance;
    component.book = book;
    fixture.detectChanges();
  });

  it('should render book details such as title ', () => {
    const de = fixture.debugElement.query(By.css('.book-title'));
    const el: HTMLElement = de.nativeElement;
    expect(el.innerText).not.toBeNull();
  });

  it('should render book details such as author ', () => {
    const de = fixture.debugElement.query(By.css('.book-author'));
    const el: HTMLElement = de.nativeElement;
    expect(el.innerText).not.toBeNull();
  });

  it('should render book details such as abstract ', () => {
    const de = fixture.debugElement.query(By.css('.book-description'));
    const el: HTMLElement = de.nativeElement;
    expect(el.innerText).not.toBeNull();
  });
});
