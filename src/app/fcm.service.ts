import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ToastController, Platform } from '@ionic/angular';
import { SwalService } from './services/swal/swal.service';
import { Plugins, PushNotification, PushNotificationToken } from '@capacitor/core';
import { FCM } from 'capacitor-fcm';
import { LocalNotificationService } from './services/local-notification/local-notification.service';
import { Notice } from './models/Notice';
const fcm = new FCM();

const { PushNotifications } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class FcmService {
  token;

  constructor(
    private afMessaging: AngularFireMessaging,
    private fun: AngularFireFunctions,
    private toastController: ToastController,
    private platform: Platform,
    private swal: SwalService,
    private localNotification: LocalNotificationService
  ) {}

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
    if (this.platform.is('capacitor')) {
      // Register with Apple / Google to receive push via APNS/FCM
      PushNotifications.register();
      // On success, we should be able to receive notifications
      return new Promise((resolve, reject) => {
        PushNotifications.addListener('registration', (token: PushNotificationToken) => {
          window.localStorage.setItem('fcmToken', token.value);
          resolve(token.value);
        });
      });
    } else {
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
  }

  showMessages() {
    if (this.platform.is('capacitor')) {
      // Show us the notification payload if the app is open on our device
      PushNotifications.addListener(
        'pushNotificationReceived',
        (notification: PushNotification) => {
          const notice: Notice = JSON.parse(JSON.stringify(notification));
          const { message, title } = notice;
          this.localNotification.createANotification(title, message);
        }
      );
    }
    this.afMessaging.messages.subscribe(msg => {
      const body: any = (msg as any).notification.body;
      this.makeToast(body);
    });
  }

  sub(topic) {
    if (this.platform.is('capacitor')) {
      fcm
        .subscribeTo({ topic })
        .then(() => this.makeToast(`subscribed to ${topic}`))
        .catch(err => console.log(err));
    } else {
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
  }

  unsub(topic) {
    if (this.platform.is('capacitor')) {
      fcm
        .unsubscribeFrom({ topic })
        .then(() => this.makeToast(`unsubscribed to ${topic}`))
        .catch(err => console.log(err));
    } else {
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
  }

  writeTokenToLocalStorage = token => {
    window.localStorage.setItem('fcmToken', token);
  };
}
