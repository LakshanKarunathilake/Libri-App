import { SwalService } from './../swal/swal.service';
import { LoadingController } from '@ionic/angular';
import { UserService } from './../user/user.service';
import { Book } from './../../models/Book';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { EventLoggerService } from '../logger/event-logger.service';
import { FileUploadService } from '../file-upload/file-upload.service';
import { BookRequest } from 'src/app/models/BookRequest';
import { Borrowing } from 'src/app/models/Borrowings';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  loading;
  private transferRef: AngularFirestoreDocument;
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
    this.logger.searchAttempt(value);
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
    const { title } = book;
    this.afs
      .collection('users')
      .doc(uid)
      .collection('bookShelf')
      .doc(title)
      .set(book)
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
  placeABookTransfer = async (transfer: Borrowing) => {
    const { uid } = this.userService.getCurrentUser();
    await this.assignToLoadingView('Initiating your transfer');
    const { title } = transfer;
    const transferRef: AngularFirestoreDocument = this.afs
      .collection('users')
      .doc(uid)
      .collection('transfers')
      .doc(title);
    this.setCurrentActiveTransfer(transferRef);
    this.loading.present();
    await this.afs
      .collection('users')
      .doc(uid)
      .collection('transfers')
      .doc(title)
      .set({ ...transfer, status: 'pending', sender: uid })
      .then(data => {
        this.loading.dismiss();
        this.swal.viewSuccessMessage(
          'Transfer',
          'Your transfer initiated successfully now tell your friend to scan the QR code'
        );
        this.logger.transferRequestAttempt(title, uid);
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
    return this.aff.functions.httpsCallable('isBookAvailable')({ biblionumber });
  };

  /**
   * Set current active transfer request document reference
   * this is called when user is initiating an transfer
   */
  private setCurrentActiveTransfer = (transfer: AngularFirestoreDocument) => {
    this.transferRef = transfer;
  };

  /**
   * Returning the current active transfer request
   * The returing object is document reference for the firestore document
   */
  getCurrentActiveTransfer = (): AngularFirestoreDocument => {
    if (this.transferRef) {
      return this.transferRef;
    }
  };

  /**
   * Accepting a book transfer
   * When the QR is scanner the relavant document is updated to transferring state
   * Library must accept the transfer then only your transfer is finalized
   */
  acceptBookTransfer = async path => {
    const { uid } = this.userService.getCurrentUser();
    this.afs
      .doc(path)
      .update({ status: 'toBeApproved', receiver: uid })
      .then(() => {
        this.logger.transferAcceptAttempt(uid);
        this.swal.viewSuccessMessage('Success', 'Successfully placed a transfer request');
      })
      .catch(error => {
        alert('error');
      });
  };

  /**
   * Reserve a book
   * This will enter the book and user details to a que and based on the que order users will be granted the book
   */
  reserveBook = (book: Book) => {
    console.log('reserving');
    let cardNumber;
    this.userService.getCurrentUserInfo().subscribe(data => {
      cardNumber = data.libraryID;
      this.afs
        .collection('users')
        .doc(data.uid)
        .collection('reservations')
        .add(book)
        .then(() => {
          const { title } = book;
          return this.afs
            .collection('reservation-ques')
            .doc(title)
            .set({
              users: firebase.firestore.FieldValue.arrayUnion({
                uid: data.uid,
                date: new Date(),
                cardNumber: data.libraryID
              }),
              ...book
            });
        })
        .then(() => {
          this.swal.viewSuccessMessage(
            'Success',
            'Book is susccessfully placed on reservation que'
          );
          this.logger.reservationAttempt(book.title, cardNumber);
        });
    });
  };
}
