import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { BookService } from '../services/book/book.service';

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
      { path: 'account/profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
      { path: 'account', loadChildren: '../account/account.module#AccountPageModule' },
      { path: 'info', loadChildren: '../LibraryInfo/info/info.module#InfoPageModule' },
      { path: 'transfer', loadChildren: '../transfer/transfer.module#TransferPageModule' }
    ]
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [MenuPage],
  providers: [BookService]
})
export class MenuPageModule {}
