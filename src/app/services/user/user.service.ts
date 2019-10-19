import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Notice } from 'src/app/models/Notice';
import { Observable } from 'rxjs';
import { Borrowing } from 'src/app/models/Borrowings';
import DateTime from 'luxon/src/datetime.js';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userBorrowings: Borrowing[];
  private overDues: Borrowing[];
  private filteredBorrowings: Borrowing[];
  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private aff: AngularFireFunctions
  ) {}

  /**
   * Creating a user in with the given credentials
   * @param userEmail Provide a valid email for registration
   * @param password Provide a password for the account creation
   */
  createUser = (userEmail: string, password: string) => {
    return this.afa.auth.createUserWithEmailAndPassword(userEmail, password);
  };

  /**
   * Initiate a confirmation email for the given user email
   * This will can be used to activate the user
   */
  sendEmailConfirmation = () => {
    return auth().currentUser.sendEmailVerification();
  };

  /**
   * Update the displayname and the phone number of a user
   * @param phoneNumber
   * @param displayName
   */
  updateUserDetails = async (displayName, phoneNumber, libraryID) => {
    console.log('updating user details', phoneNumber, displayName);
    const { uid, emailVerified, email, updateProfile } = this.afa.auth.currentUser;
    // Updating the display name in the auth
    auth().currentUser.updateProfile({ displayName, photoURL: '' });
    // Updating the details in the firestore document
    this.afs
      .collection('users')
      .doc(uid)
      .set({ phoneNumber, displayName, uid, emailVerified, email, libraryID });
  };

  /**
   * Get the information about the current logged in user
   */
  getCurrentUser = () => {
    return this.afa.auth.currentUser;
  };

  /**
   * Get current user's library id number
   */
  getLibraryID = uid => {
    return new Promise((resolve, reject) => {
      this.afs
        .collection('users')
        .doc(uid)
        .valueChanges()
        .subscribe(record => {
          resolve(record['libraryID']);
        });
    });
  };

  /**
   * You can obtain all the transactional data relavant to the user by calling this method
   * The data will include the borrowings, overdues and penalties
   */
  getUserBorrowings = async () => {
    const { uid } = this.getCurrentUser();
    const id = await this.getLibraryID(uid);
    if (this.userBorrowings === undefined) {
      console.log('inside');
      const { data } = await this.aff.functions.httpsCallable('getPersonalBorrowings')({ id });
      let results: Borrowing[];
      results = JSON.parse(data['result']);
      results = results.map(result => {
        result.date_due = DateTime.fromISO(result.date_due).toLocaleString(DateTime.DATE_FULL);
        result.issuedate = DateTime.fromISO(result.issuedate).toLocaleString(DateTime.DATE_FULL);
        return result;
      });
      this.userBorrowings = results;
      this.filterOverDues(results);
    }
  };

  /**
   * Get all the notices
   */
  getNotices = (): Observable<Notice[]> => {
    return this.afs.collection<Notice>('notices').valueChanges();
  };

  /**
   * Filtering overdues from the borrowing list
   */
  filterOverDues = (allBorrowings: Borrowing[]) => {
    const overDues = [];
    const notOverDue = [];
    allBorrowings.forEach(row => {
      if (Date.parse(row.date_due) - Date.parse(new Date().toString()) < 0) {
        overDues.push(row);
      } else {
        notOverDue.push(row);
      }
    });
    this.overDues = overDues;
    this.filteredBorrowings = notOverDue;
  };

  /**
   * Getter method for overdue
   * @returns Borrowings[]
   */
  getOverDues = () => {
    return this.overDues;
  };

  /**
   * Getter method for overdue
   * @returns Borrowings[]
   */
  getNotOverdues = () => {
    return this.filteredBorrowings;
  };

  /**
   * Getter method for all borrowings
   * @returns Borrowings[]
   */
  getAllBorrowings = () => {
    return this.userBorrowings;
  };

  /**
   * Check whether the given userId is registered in the library
   * This method will be invoked when a user tries to register
   * Sample id number is
   */
  isUserRegistered = async (uid: string) => {
    console.log('uid', uid);
    if (uid !== null) {
      const func = this.aff.functions.httpsCallable('isUserIdAvailable');
      const data = await func({ id: uid });
      console.log('data', data);
      return data;
    } else {
      return '';
    }
  };
}
