import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Platforms } from '@ionic/core';
import { Device } from '@ionic-native/device/ngx';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  deviceInfo: any;

  /**
   * Querying the information of the device when it is available
   * @param platformInfo Information retrieve from the ionic platform service
   * @param device Information retrieved from the cordova device plugin
   */
  constructor(private platformInfo: Platform, private device: Device) {
    const { platform, isVirtual, manufacturer, model, version, uuid, serial, cordova } = device;
    this.deviceInfo = {
      platform,
      isVirtual,
      manufacturer,
      model,
      version,
      uuid,
      serial,
      cordova
    };
  }

  /**
   * Returning the platform of the user
   * @returns cordova || PWA || ios || android
   */
  getPlatform = () => {
    let platforms: Array<Platforms>;
    platforms = ['cordova', 'pwa', 'ios', 'android', 'capacitor', 'desktop'];
    platforms.forEach(platform => {
      if (this.platformInfo.is(platform)) {
        return platform;
      }
    });
  };
}
