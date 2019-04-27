import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { ForgetPasswordComponent } from '../components/forget-password/forget-password.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPage, ForgetPasswordComponent],
  entryComponents: [ForgetPasswordComponent]
})
export class LoginPageModule {}
