import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestbookPage } from './requestbook.page';

xdescribe('RequestbookPage', () => {
  let component: RequestbookPage;
  let fixture: ComponentFixture<RequestbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestbookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
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
