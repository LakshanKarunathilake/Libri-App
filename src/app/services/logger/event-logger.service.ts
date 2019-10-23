import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import swal from 'sweetalert';
import { UserService } from '../user/user.service';
import { PlatformService } from '../platform/platform.service';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
firebase.initializeApp(environment.firebase);

const analytics = firebase.analytics();
@Injectable({
  providedIn: 'root'
})
export class EventLoggerService {
  device: string;
  uid: string;
  constructor(
    public fba: FirebaseAnalytics,
    private platform: Platform,
    private userService: UserService,
    private deviceInfo: PlatformService,
    private afs: AngularFirestore
  ) {
    this.device = this.platform.is('cordova') ? 'cordova' : 'non-android';
  }

  /**
   * Logging event occurred in the application
   * These logs can be find in the firebase analytics dashboard.
   * You have the ability to query from the type of the log and values including metadata
   * @param type : Type of the logging event
   * @param metadata : Additional data provided for the event
   */
  private logEvent = (type: string, metadata: Object = {}) => {
    console.log('Logging button click event');
    if (this.device === 'cordova') {
      this.fba
        .logEvent(type, metadata)
        .then((res: any) => {
          console.log(res);
        })
        .catch((error: any) => {
          swal('error', error);
          console.error(error);
        });
    }
  };

  /**
   * Logging account forget password change attempt
   */
  passwordForgetEvent = () => {
    this.logEvent('libri_forget_password', { time: new Date() });
  };

  /**
   * Logging placing book request event
   *
   */
  bookRequestEvent = value => {
    this.logEvent('book_request', { value });
  };

  /**
   * Increment user login attempts
   */
  loginAttempt = () => {
    const date = new Date();
    const date_formatted =
      '' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    this.afs
      .collection('admin')
      .doc('counters')
      .collection('login')
      .doc(date_formatted)
      .set({ count: firebase.firestore.FieldValue.increment(1) })
      .then(() => {
        const { uid } = this.userService.getCurrentUser();
        const deviceInfo = this.deviceInfo.getDeviceInfo();
        analytics.logEvent('login', {
          uid,
          ...deviceInfo
        });
      });
  };

  /**
   * Increment user Registration attempts
   */
  registerAttempt = () => {
    const date = new Date();
    const date_formatted =
      '' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    this.afs
      .collection('admin')
      .doc('counters')
      .collection('register')
      .doc(date_formatted)
      .set({ count: firebase.firestore.FieldValue.increment(1) });
  };

  /**
   * Increment user Transfer attempts
   */
  transferRequestAttempt = (title, cardnumber) => {
    const date = new Date();
    const date_formatted =
      '' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    this.afs
      .collection('admin')
      .doc('counters')
      .collection('transfer_request')
      .doc(date_formatted)
      .set({ count: firebase.firestore.FieldValue.increment(1) })
      .then(() => analytics.logEvent('transfer_request', { title, cardnumber }));
  };

  /**
   * Increment user Transfer attempts
   */
  transferAcceptAttempt = cardnumber => {
    const date = new Date();
    const date_formatted =
      '' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    this.afs
      .collection('admin')
      .doc('counters')
      .collection('transfer_accept')
      .doc(date_formatted)
      .set({ count: firebase.firestore.FieldValue.increment(1) })
      .then(() => analytics.logEvent('transfer_accept', { cardnumber }));
  };

  /**
   * Logging the book searching event
   * Incrementing the attempts also
   * @param value The value that user entered for searching
   */
  searchAttempt = value => {
    const date = new Date();
    const date_formatted =
      '' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    this.afs
      .collection('admin')
      .doc('counters')
      .collection('search')
      .doc(date_formatted)
      .set({ count: firebase.firestore.FieldValue.increment(1) })
      .then(() => analytics.logEvent('search', { value }));
  };

  /**
   * Increment user reservation attempts
   */
  reservationAttempt = (title, cardnumber) => {
    const date = new Date();
    const date_formatted =
      '' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    this.afs
      .collection('admin')
      .doc('counters')
      .collection('reservation')
      .doc(date_formatted)
      .set({ count: firebase.firestore.FieldValue.increment(1) })
      .then(() => analytics.logEvent('reservation', { title, cardnumber }));
  };
}
