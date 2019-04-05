import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'booksearch', loadChildren: './booksearch/booksearch.module#BooksearchPageModule' },
  { path: 'requestbook', loadChildren: './requestbook/requestbook.module#RequestbookPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
