import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Notice } from 'src/app/models/Notice';
import { Observable } from 'rxjs';
import { Borrowing } from 'src/app/models/Borrowings';
import DateTime from 'luxon/src/datetime.js';
import { User } from 'src/app/models/User';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';
import { FcmService } from 'src/app/fcm.service';
import { SwalService } from '../swal/swal.service';
import { Platform } from '@ionic/angular';
import { Crashlytics } from 'capacitor-crashlytics';
const crashlytics = new Crashlytics();

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
    private aff: AngularFireFunctions,
    private fcm: FcmService,
    private swal: SwalService,
    private platform: Platform
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
   * Update the displayname and the phone number of a user
   * @param phoneNumber
   * @param displayName
   */
  updateUserDetails = async (displayName, phoneNumber, libraryID) => {
    const { uid, emailVerified, email } = this.afa.auth.currentUser;
    const topics = ['notices'];
    // Updating the display name in the auth
    auth().currentUser.updateProfile({ displayName, photoURL: '' });
    // Updating the details in the firestore document
    this.afs
      .collection('users')
      .doc(uid)
      .set({ phoneNumber, displayName, uid, emailVerified, email, libraryID, topics });
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

  /**
   * Send an email to the user registered email
   * This will contain a link to change the password
   */
  resetPassword = () => {
    const { email } = this.getCurrentUser();
    this.afa.auth.sendPasswordResetEmail(email);
  };

  /**
   * Return user registration details
   * This will return the user details stored in the firebase
   */
  getCurrentUserInfo = (): Observable<User> => {
    const { uid } = this.getCurrentUser();
    return this.afs
      .collection('users')
      .doc<User>(uid)
      .valueChanges();
  };

  /**
   * Subscribe to topic for notice distribution
   * This method can register user for a specific type of notice topics that library is created
   */
  subscribeToTopic = (topic: string) => {
    const { uid } = this.getCurrentUser();
    this.afs
      .collection('users')
      .doc(uid)
      .update({ topics: firebase.firestore.FieldValue.arrayUnion(topic) })
      .then(() => {
        this.fcm.sub(topic);
        this.swal.viewSuccessMessage('Success', `You have successfully subscribed from ${topic}`);
      })
      .catch(error => {
        console.log('Subscribing error', error);
        this.swal.viewErrorMessage('Error', `Subscribing to topic ${topic} is not successful`);
      });
  };

  /**
   * Unsubscribe to topic
   * This method can register user for a specific type of notice topics that library is created
   */
  unsubscribeToTopic = (topic: string) => {
    const { uid } = this.getCurrentUser();
    this.afs
      .collection('users')
      .doc(uid)
      .update({ topics: firebase.firestore.FieldValue.arrayRemove(topic) })
      .then(() => {
        this.fcm.unsub(topic);
        this.swal.viewSuccessMessage('Success', `You have successfully subscribed from ${topic}`);
      })
      .catch(error => {
        console.log('Unsubscribing error', error);
        this.swal.viewErrorMessage('Error', `Subscribing to topic ${topic} not successful`);
      });
  };

  /**
   * Get all users subscribed topic
   * Loding user currently subscribed topics
   */
  getUserTopics = (): Observable<string[]> => {
    const { uid } = this.getCurrentUser();
    return this.afs
      .collection('users')
      .doc(uid)
      .valueChanges()
      .pipe(map((user: User) => user.topics));
  };

  /**
   * Subscribe for registered topics on Login
   */
  subscribeForUserTopics = () => {
    this.getUserTopics()
      .subscribe(data => {
        data.forEach(element => {
          this.subscribeToTopic(element);
        });
      })
      .unsubscribe();
  };

  /**
   * Retrieve current transfer details
   * Query from firestore documents and obtain transfer details
   */
  getCurrentTransferDetails = () => {
    const { uid } = this.getCurrentUser();
    return this.afs
      .collection('users')
      .doc(uid)
      .collection('transfers')
      .valueChanges();
  };

  /**
   * Register notification token
   * This will be updated in the in the user document
   */
  registerToken = () => {
    const { uid } = this.getCurrentUser();
    const token = window.localStorage.getItem('fcmToken');
    let afs_token;
    if (this.platform.is('android')) {
      afs_token = { android_token: token };
    } else if (this.platform.is('ios')) {
      afs_token = { ios_token: token };
    } else {
      afs_token = { web_token: token };
    }
    this.afs
      .collection('users')
      .doc(uid)
      .update({ ...afs_token });
  };

  /**
   * Initiate a confirmation email for the given user email
   * This will can be used to activate the user
   */
  sendConfirmationEmail = () => {
    this.afa.auth.currentUser
      .sendEmailVerification()
      .then(() =>
        this.swal.viewSuccessMessage('Success', 'Email is sent successfully please check !')
      )
      .catch(error =>
        this.swal.viewErrorMessage(
          'Error',
          'Error in sending confirmation email please try again later'
        )
      );
  };

  registerCrashlytics = () => {
    const { displayName, email, uid } = this.getCurrentUser();
    console.log('registering');
    if (this.platform.is('cordova')) {
      crashlytics
        .logUser({
          name: displayName,
          email,
          id: uid
        })
        .then(() => alert(`user logged`))
        .catch(err => {
          console.log('Error occured');
          alert('Error Occured');
        });
    }
  };
}
