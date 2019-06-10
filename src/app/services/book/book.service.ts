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

  placingBookRequest = async bookRequest => {
    const { uid } = this.userService.getCurrentUser();
    await this.assignToLoadingView('Please wait your request is placing!');
    this.loading.this.afs
      .collection('users')
      .doc(uid)
      .collection('requests')
      .add(bookRequest)
      .then(() => {
        this.loading.dismiss();
        this.swal.viewSuccessMessage('Request placement', 'Your request is placed successfully!');
        console.log('Book request placed successfully');
      })
      .catch(error => {
        this.loading.dismiss();
        console.error('An error occured while placing a book request', error);
        this.swal.viewErrorMessage(
          'Request placement',
          'Sorry your placement is not successful try again later'
        );
      });
  };

  /**
   * Placing a book transfer is taken place in this function
   * This will only create a document under users/{userId}/transfers/
   */
  placeABookTransfer = async request => {
    const { uid } = this.userService.getCurrentUser();
    await this.assignToLoadingView('Initiating your transfer');
    this.loading.present();
    this.afs
      .collection('users')
      .doc(uid)
      .collection('transfers')
      .add(request)
      .then(() => {
        this.loading.dismiss();
        this.swal.viewSuccessMessage(
          'Transfer',
          'Your transfer initiated successfully now tell your friend to scan the QR code'
        );
      })
      .catch(error => {
        this.loading.dismiss();
        this.swal.viewErrorMessage(
          'Trnasfer error',
          'Sorry we can not place your transfer at the moment'
        );
      });
  };
}
