import { MenuTitleComponentModule } from './../components/menu-title/menu-title.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BooksearchPage } from './booksearch.page';
import { BookViewComponent } from '../components/book-view/book-view.component';
import { BookSearchView } from '../components/book-search-view/book-search-view.component';
import { AnimatedTextComponent } from '../components/animated-text/animated-text.component';

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
  declarations: [BooksearchPage, BookViewComponent, BookSearchView, AnimatedTextComponent],
  entryComponents: [BookViewComponent, BookSearchView, AnimatedTextComponent]
})
export class BooksearchPageModule {}
