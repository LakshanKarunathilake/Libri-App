import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPage } from './login.page';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { UserServiceStub, EventLoggerServiceStub } from '../Stubs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ModalController, AngularDelegate } from '@ionic/angular';
import { EventLoggerService } from '../services/logger/event-logger.service';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [
        { provide: UserService, useClass: UserServiceStub },
        { provide: AngularFireAuth },
        { provide: Router },
        ModalController,
        AngularDelegate,
        { provide: EventLoggerService, useClass: EventLoggerServiceStub }
      ],
      declarations: [LoginPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
