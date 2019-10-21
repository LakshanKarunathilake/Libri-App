import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackPage } from './feedback.page';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IonicModule } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';
import { MenuTitleComponentModule } from '../components/menu-title/menu-title.module';
import { MatSelectModule } from '@angular/material/select';
import { AngularFirestore } from '@angular/fire/firestore';
describe('FeedbackPage', () => {
  let component: FeedbackPage;
  let fixture: ComponentFixture<FeedbackPage>;
  const routes: Routes = [
    {
      path: '',
      component: FeedbackPage
    }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        // FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MatStepperModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MenuTitleComponentModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule
      ],
      declarations: [FeedbackPage],
      providers: [AngularFirestore],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
