import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Platforms } from '@ionic/core';
import { Device } from '@ionic-native/device/ngx';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  /**
   * Querying the information of the device when it is available
   * @param platformInfo Information retrieve from the ionic platform service
   * @param device Information retrieved from the cordova device plugin
   */
  constructor(private platformInfo: Platform, private device: Device) {}

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

  getDeviceInfo = () => {
    const {
      platform,
      isVirtual,
      manufacturer,
      model,
      version,
      uuid,
      serial,
      cordova
    } = this.device;
    return {
      platform,
      isVirtual,
      manufacturer,
      model,
      version,
      uuid,
      serial,
      cordova
    };
  };
}
