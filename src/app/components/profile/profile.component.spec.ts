import { OverallServiceStub } from './../../Stubs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { SwalService } from 'src/app/services/swal/swal.service';
import { UserService } from 'src/app/services/user/user.service';
import { UserServiceStub } from 'src/app/Stubs';
import { OverallService } from 'src/app/services/overall/overall.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        SwalService,
        { provide: UserService, useClass: UserServiceStub },
        { provide: OverallService, useClass: OverallServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
