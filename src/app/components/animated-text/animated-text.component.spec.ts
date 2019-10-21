import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedTextPage } from './animated-text.page';

describe('AnimatedTextPage', () => {
  let component: AnimatedTextPage;
  let fixture: ComponentFixture<AnimatedTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedTextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
