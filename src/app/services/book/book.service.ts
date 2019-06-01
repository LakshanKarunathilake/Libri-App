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
  loading;
  constructor(
    private aff: AngularFireFunctions,
    private afs: AngularFirestore,
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private swal: SwalService
  ) {}

  assignToLoadingView = async (message: string) => {
    this.loading = await this.loadingCtrl.create({
      message,
      spinner: 'crescent'
    });
  };

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
    await this.assignToLoadingView('Adding your book to shelf');
    this.loading.present();

    this.afs
      .collection('users')
      .doc(uid)
      .collection('bookShelf')
      .add(book)
      .then(() => {
        this.loading.dismiss();
        this.swal.viewSuccessMessage(
          'Shelf Update',
          'The book is added to your shelf successfully!'
        );
      })
      .catch(error => {
        this.loading.dismiss();
        console.error('error occured while adding book to book shelf', error);
        this.swal.viewErrorMessage('Error', 'Sorry your book is not added for your shelf');
      });
  };

  /**
   * Retrieving the information of book requests already placed by the user
   */
  getBookRequests = () => {
    const { uid } = this.userService.getCurrentUser();
    try {
      return this.afs
        .collection('users')
        .doc(uid)
        .collection('requests')
        .valueChanges();
    } catch (error) {
      console.error('Error occured while querying for book requests', error);
    }
  };
}
