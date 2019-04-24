import { MenuTitleComponentModule } from './../../components/menu-title/menu-title.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoPage } from './info.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPage,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'about', loadChildren: '../about/about.module#AboutPageModule' },
      { path: 'overview', loadChildren: '../overview/overview.module#OverviewPageModule' }
    ]
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
  declarations: [InfoPage]
})
export class InfoPageModule {}
