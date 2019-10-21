import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IonicModule } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';
import { FeedbackPage } from './feedback.page';
import { MenuTitleComponentModule } from '../components/menu-title/menu-title.module';
import { MatSelectModule } from '@angular/material/select';
const routes: Routes = [
  {
    path: '',
    component: FeedbackPage
  }
];

@NgModule({
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
  declarations: [FeedbackPage]
})
export class FeedbackPageModule {}
