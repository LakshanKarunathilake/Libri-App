import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookViewDesktopPage } from './book-view-desktop.page';

describe('BookViewDesktopPage', () => {
  let component: BookViewDesktopPage;
  let fixture: ComponentFixture<BookViewDesktopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookViewDesktopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookViewDesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
