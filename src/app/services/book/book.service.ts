import { SwalService } from './../swal/swal.service';
import { LoadingController } from '@ionic/angular';
import { UserService } from './../user/user.service';
import { Book } from './../../models/Book';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(
    private aff: AngularFireFunctions,
    private afs: AngularFirestore,
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private swal: SwalService
  ) {}

  /**
   * Call for the cloud function requesting the book records matching for the value
   * Type can be title or author or both
   */
  searchBooks = (value, type) => {
    const searchBook = this.aff.functions.httpsCallable('searchBook');
    return searchBook({ value, type });
  };

  /**
   * Adding books to personal shelf
   * This function can be used to add the favorite books of users for future reference or use
   */
  addBookToShelf = async (book: Book) => {
    const { uid } = this.userService.getCurrentUser();
    const loading = await this.loadingCtrl.create({
      message: 'Adding your book to shelf',
      spinner: 'crescent'
    });
    loading.present();

    this.afs
      .collection('users')
      .doc(uid)
      .collection('bookShelf')
      .add(book)
      .then(() => {
        loading.dismiss();
        this.swal.viewSuccessMessage(
          'Shelf Update',
          'The book is added to your shelf successfully!'
        );
      })
      .catch(error => {
        console.error('error occured while adding book to book shelf', error);
        this.swal.viewErrorMessage('Error', 'Sorry your book is not added for your shelf');
      });
  };
}
