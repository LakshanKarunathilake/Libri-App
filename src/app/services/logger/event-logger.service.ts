import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class EventLoggerService {
  device: string;
  constructor(public fba: FirebaseAnalytics, private platform: Platform) {
    this.device = platform.is('cordova') ? 'cordova' : 'non-android';
  }

  logEvent = (name, value) => {
    console.log('Logging button click event');
    if (this.device === 'cordova')
      this.fba
        .logEvent('button click', { name: 'login' })
        .then((res: any) => {
          console.log(res);
          swal('done');
        })
        .catch((error: any) => {
          swal('error', error);
          console.error(error);
        });
  };
}
