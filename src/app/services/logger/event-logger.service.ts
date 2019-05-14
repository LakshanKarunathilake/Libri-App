import { Injectable } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class EventLoggerService {
  constructor(public fba: FirebaseAnalytics) {}

  logEvent = (name, value) => {
    console.log('Logging button click event');
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
