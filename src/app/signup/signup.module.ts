import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { IonicModule } from '@ionic/angular';
import { SignupPage } from './signup.page';
import { UserService } from '../services/user/user.service';
import { MatIconModule } from '@angular/material/icon';

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
    ReactiveFormsModule,
    MatIconModule
  ],
  declarations: [SignupPage],
  providers: [UserService]
})
export class SignupPageModule {}
