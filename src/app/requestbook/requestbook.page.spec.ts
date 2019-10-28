import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestbookPage } from './requestbook.page';
import { ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../services/book/book.service';
import { BookServiceStub } from '../Stubs';

describe('RequestbookPage', () => {
  let component: RequestbookPage;
  let fixture: ComponentFixture<RequestbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [{ provide: BookService, useClass: BookServiceStub }],
      declarations: [RequestbookPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
