import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequestbookPage } from './requestbook.page';
import { MenuTitleComponentModule } from '../components/menu-title/menu-title.module';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: RequestbookPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MenuTitleComponentModule,
    ReactiveFormsModule
  ],
  declarations: [RequestbookPage]
})
export class RequestbookPageModule {}
