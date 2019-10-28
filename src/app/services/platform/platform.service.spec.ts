import { TestBed } from '@angular/core/testing';

import { PlatformService } from './platform.service';
import { Platform } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';

describe('PlatformService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [Platform, Device]
    })
  );

  it('should be created', () => {
    const service: PlatformService = TestBed.get(PlatformService);
    expect(service).toBeTruthy();
  });
});
