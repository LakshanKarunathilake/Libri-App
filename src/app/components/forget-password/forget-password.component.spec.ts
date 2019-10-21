import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgetPasswordComponent } from './forget-password.component';
import { SwalService } from 'src/app/services/swal/swal.service';
import { ModalController, AngularDelegate } from '@ionic/angular';
import { FormBuilder, ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';

describe('ForgetPasswordComponent', () => {
  let component: ForgetPasswordComponent;
  let fixture: ComponentFixture<ForgetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ForgetPasswordComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [SwalService, ModalController, AngularDelegate]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
