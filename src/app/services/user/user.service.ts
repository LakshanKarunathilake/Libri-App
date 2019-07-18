import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Notice } from 'src/app/models/Notice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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
  getUserBorrowings = async uid => {
    const id = await this.getLibraryID(uid);
    return this.aff.functions.httpsCallable('getPersonalBorrowings')({ id });
  };

  /**
   * Get all the notices
   */
  getNotices = (): Observable<Notice[]> => {
    return this.afs.collection<Notice>('notices').valueChanges();
  };
}
