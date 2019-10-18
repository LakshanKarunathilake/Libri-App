import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ToastController, Platform } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { SwalService } from './services/swal/swal.service';

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
    private swal: SwalService
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
      if (this.device !== 'cordova') {
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
      } else {
        // this.fm
        //   .getToken()
        //   .then(token => {
        //     this.token = token;
        //     swal('token recieved', token);
        //     resolve(token);
        //   })
        //   .catch(error => {
        //     swal('error', error);
        //     reject(error);
        //   });
      }
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
}
