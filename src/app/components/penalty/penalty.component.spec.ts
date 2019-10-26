import { AngularFireAuth } from '@angular/fire/auth';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PenaltyComponent } from './penalty.component';
import { AngularFireFunctionsStub, UserServiceStub, SwalServiceStub } from 'src/app/Stubs';
import { SwalService } from 'src/app/services/swal/swal.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { UserService } from 'src/app/services/user/user.service';

describe('PenaltyComponent', () => {
  let component: PenaltyComponent;
  let fixture: ComponentFixture<PenaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PenaltyComponent],
      providers: [
        { provide: AngularFireFunctions, useClass: AngularFireFunctionsStub },
        { provide: UserService, useClass: UserServiceStub },
        { provide: SwalService, useclass: SwalServiceStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyComponent);
    component = fixture.componentInstance;
  });

  it('should create penalty component with services', () => {
    expect(component).toBeTruthy();
  });
});
