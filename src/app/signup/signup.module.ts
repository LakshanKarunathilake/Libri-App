import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { IonicModule } from '@ionic/angular';
import { SignupPage } from './signup.page';

const routes: Routes = [
  {
    path: '',
    component: SignupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
