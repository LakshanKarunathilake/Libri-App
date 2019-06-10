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
  };
}
