import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ToastController, Platform } from '@ionic/angular';
import { SwalService } from './services/swal/swal.service';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core';
import { AngularFirestore } from '@angular/fire/firestore';

const { PushNotifications } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class FcmService {
  token;
  device;

  constructor(
    private afMessaging: AngularFireMessaging,
    private fun: AngularFireFunctions,
    private toastController: ToastController,
    private platform: Platform,
    private swal: SwalService,
    private afs: AngularFirestore
  ) {
    this.device = this.platform.is('cordova') ? 'cordova' : 'non-cordova';
  }

  async makeToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'dismiss'
    });
    toast.present();
  }

  getPermission() {
    return new Promise((resolve, reject) => {
      this.afMessaging.requestToken.subscribe(
        token => {
          console.log('Permission granted and token is ', token);
          window.localStorage.setItem('fcmToken', token);

          this.token = token;
          resolve(token);
        },
        error => {
          console.log('error occured when requesting permission');
          console.error(error);
          reject('error occured');
        }
      );
    });
  }

  showMessages() {
    return this.afMessaging.messages.subscribe(msg => {
      const body: any = (msg as any).notification.body;
      this.makeToast(body);
    });
  }

  sub(topic) {
    const token = window.localStorage.getItem('fcmToken');
    this.fun
      .httpsCallable('subscribeToTopic')({ topic, token })
      .subscribe(
        () => this.makeToast(`subscribed to ${topic}`),
        error => {
          console.log('Subscribing error');
          this.swal.viewErrorMessage('Error', 'Sorry unsubscribing failure !');
        }
      );
  }

  unsub(topic) {
    const token = window.localStorage.getItem('fcmToken');
    this.fun
      .httpsCallable('unsubscribeFromTopic')({ topic, token })
      .subscribe(
        () => this.makeToast(`unsubscribed to ${topic}`),
        error => {
          console.log('Unsubscribing error', error);
          this.swal.viewErrorMessage('Error', 'Sorry unsubscribing failure !');
        }
      );
  }

  writeTokenToLocalStorage = token => {
    window.localStorage.setItem('fcmToken', token);
  };

  testing = () => {
    console.log('Initializing HomePage');

    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration', (token: PushNotificationToken) => {
      this.afs.collection('dummy').add({ id: token.value, date: new Date() });
      alert('Push registration success, token: ' + token.value);
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived', (notification: PushNotification) => {
      alert('Push received: ' + JSON.stringify(notification));
    });

    // Method called when tapping on a notification
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      }
    );
  };
}
