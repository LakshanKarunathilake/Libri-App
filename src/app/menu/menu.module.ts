import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'feedback', loadChildren: '../feedback/feedback.module#FeedbackPageModule' },
      { path: 'booksearch', loadChildren: '../booksearch/booksearch.module#BooksearchPageModule' },
      {
        path: 'requestbook',
        loadChildren: '../requestbook/requestbook.module#RequestbookPageModule'
      },
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
      { path: 'profile/account', loadChildren: '../account/account.module#AccountPageModule' },
      { path: 'info', loadChildren: '../LibraryInfo/info/info.module#InfoPageModule' }
    ]
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [MenuPage]
})
export class MenuPageModule {}
