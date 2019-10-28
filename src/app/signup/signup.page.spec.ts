import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPage } from './signup.page';
import { ReactiveFormsModule } from '@angular/forms';
import { FcmService } from '../fcm.service';
import { FcmServiceStub } from '../Stubs';
import { UserService } from '../services/user/user.service';
import { EventLoggerService } from '../services/logger/event-logger.service';

describe('SignupPage', () => {
  let component: SignupPage;
  let fixture: ComponentFixture<SignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SignupPage],
      providers: [
        { provide: FcmService, useClass: FcmServiceStub },
        { provide: UserService },
        { provide: EventLoggerService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
