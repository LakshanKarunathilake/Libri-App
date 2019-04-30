import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReCaptchaPage } from './re-captcha.page';

describe('ReCaptchaPage', () => {
  let component: ReCaptchaPage;
  let fixture: ComponentFixture<ReCaptchaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReCaptchaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReCaptchaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
