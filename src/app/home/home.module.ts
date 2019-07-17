import { MenuTitleComponentModule } from './../components/menu-title/menu-title.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { MatCardModule } from '@angular/material/card';
import { HomePage } from './home.page';
import { MatExpansionModule } from '@angular/material/expansion';
import { CollapsibleListComponent } from '../components/collapsible-list/collapsible-list.component';
const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MenuTitleComponentModule,
    MatExpansionModule,
    MatCardModule
  ],
  declarations: [HomePage, CollapsibleListComponent]
})
export class HomePageModule {}
