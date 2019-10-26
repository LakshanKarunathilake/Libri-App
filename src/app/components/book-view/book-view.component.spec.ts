import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookViewComponent } from './book-view.component';
import { BookService } from 'src/app/services/book/book.service';
import { BookServiceStub } from 'src/app/Stubs';
import { ModalController, AngularDelegate } from '@ionic/angular';

describe('BookViewComponent', () => {
  let component: BookViewComponent;
  let fixture: ComponentFixture<BookViewComponent>;
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
      declarations: [BookViewComponent],
      providers: [
        ModalController,
        AngularDelegate,
        { provide: BookService, useClass: BookServiceStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookViewComponent);
    component = fixture.componentInstance;
    component.book = book;
    fixture.detectChanges();
  });

  it('should create the component with bindings', () => {
    expect(component).toBeTruthy();
  });

  it('should have the book details when initializing', () => {
    expect(component.book).not.toBeNull();
  });
});
