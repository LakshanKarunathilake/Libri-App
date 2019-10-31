import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class LocalNotificationService {
  constructor(private localNotification: LocalNotifications) {}

  /**
   * Creating a notification which will be visible with the experience of native OS
   * @param id This will be a unique id for the message
   * @param title This will be the title of the notification
   * @param text This will be the body of the notification
   * @param icon The link of the icon of the notification
   */
  createANotification = (title: string, text: string) => {
    const id = Math.random() * 1000;
    this.localNotification.schedule([
      {
        id,
        text,
        title
      }
    ]);
  };

  dummyNotification = () => {
    alert('sadsad');
    this.localNotification.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      title: 'sadkasjds'
    });
  };
}
