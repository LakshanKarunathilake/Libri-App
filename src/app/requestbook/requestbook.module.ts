import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequestbookPage } from './requestbook.page';
import { MenuTitleComponentModule } from '../components/menu-title/menu-title.module';

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
    MenuTitleComponentModule
  ],
  declarations: [RequestbookPage]
})
export class RequestbookPageModule {}
