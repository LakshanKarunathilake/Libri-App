import { MenuTitleComponentModule } from './../components/menu-title/menu-title.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BooksearchPage } from './booksearch.page';
import { BookViewComponent } from '../components/book-view/book-view.component';

const routes: Routes = [
  {
    path: '',
    component: BooksearchPage
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
  declarations: [BooksearchPage, BookViewComponent],
  entryComponents: [BookViewComponent]
})
export class BooksearchPageModule {}
