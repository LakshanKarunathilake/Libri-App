import { AngularFireFunctions } from '@angular/fire/functions';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private aff: AngularFireFunctions) {}

  searchBooks = (value, type) => {
    const searchBook = this.aff.functions.httpsCallable('searchBook');
    return searchBook({ value, type });
  };
}
