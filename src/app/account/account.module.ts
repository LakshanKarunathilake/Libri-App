import { MenuPageModule } from './../menu/menu.module';
import { MenuTitleComponentModule } from './../components/menu-title/menu-title.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account.page';
import { AccountTabMenuComponentModule } from '../components/account-tab-menu/account-tab-menu.component.module';
import { ProfileComponent } from '../components/profile/profile.component';
import { BorrowingsComponent } from '../components/borrowings/borrowings.component';
import { PenaltyComponent } from '../components/penalty/penalty.component';

const routes: Routes = [
  {
    path: '',
    component: AccountPage,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'borrowings', component: BorrowingsComponent },
      { path: 'penalty', component: PenaltyComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MenuTitleComponentModule,
    AccountTabMenuComponentModule
  ],
  declarations: [AccountPage, ProfileComponent, BorrowingsComponent, PenaltyComponent]
})
export class AccountPageModule {}
