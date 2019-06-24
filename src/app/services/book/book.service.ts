import { SwalService } from './../swal/swal.service';
import { LoadingController } from '@ionic/angular';
import { UserService } from './../user/user.service';
import { Book } from './../../models/Book';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EventLoggerService } from '../logger/event-logger.service';
import { FileUploadService } from '../file-upload/file-upload.service';
import { BookRequest } from 'src/app/models/BookRequest';

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
    private swal: SwalService,
    private logger: EventLoggerService,
    private fileUpload: FileUploadService
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
    this.logger.bookSearchEVent(value);
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
   * This will call the firebase and get the book request under users/{userId}/requests/
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

  /**
   * Place a book request under the user
   * This will create a firebase document under the collection of requests under user document
   * @param bookRequest : An object containing the information of a bok request
   *
   */
  placingBookRequest = async (bookRequest: BookRequest) => {
    const imageDetails = this.fileUpload.getFileDate();
    bookRequest.file = imageDetails;

    const updateDB = async () => {
      const { uid } = this.userService.getCurrentUser();
      await this.assignToLoadingView('Please wait your request is placing!');
      this.loading.present();
      this.afs
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
    if (imageDetails.imageURL !== '') {
      updateDB();
    } else {
      this.swal.displayConfirmation(
        'Image request',
        'We can provide a better service if you can provide a picture of the book',
        ok => {
          if (ok) {
            updateDB();
            console.log('true', ok);
          } else {
            console.log('false', ok);
            this.swal.displayAutoHideMessage(
              'Waiting...',
              'Waiting until your upload if you dont have image please click cancel button in confirm menu',
              '',
              3000
            );
          }
        }
      );
    }
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

  /**
   * This method will trigger a firebase cloud function and find out the status of book availability
   * If the book is available, the method will return the status as available
   * If the book is on-loan status the method will return the status as onLoan and will notify the approximate date of return
   * @param biblionumber The number of the biblio or book
   */
  checkBookAvailabilityStatus = (biblionumber: string) => {
    this.aff.functions.httpsCallable('isBookAvailable')({ biblionumber });
  };
}
