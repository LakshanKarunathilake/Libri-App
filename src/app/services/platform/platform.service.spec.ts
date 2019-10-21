import { TestBed } from '@angular/core/testing';
import { Device } from '@ionic-native/device/ngx';
import { PlatformService } from './platform.service';
import { Platform } from '@ionic/angular';

describe('PlatformService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: Device }, { provide: Platform }]
    })
  );

  it('should be created', () => {
    const service: PlatformService = TestBed.get(PlatformService);
    expect(service).toBeTruthy();
  });
});
