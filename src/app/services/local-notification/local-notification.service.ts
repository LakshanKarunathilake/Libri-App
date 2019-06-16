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
   * @param delay Number of hours the notification must be delayed
   */
  createANotification = (id: number, title: string, text: string, icon: string, delay: number) => {
    const trigger = { at: new Date(new Date().getTime() + 3600 * delay) };
    this.localNotification.schedule([
      {
        id,
        text,
        title,
        trigger
      }
    ]);
  };
}
