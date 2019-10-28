import { TestBed } from '@angular/core/testing';

import { FcmService } from './fcm.service';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireFunctions } from '@angular/fire/functions';
import { LocalNotificationService } from './services/local-notification/local-notification.service';

describe('FcmService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFireMessaging },
        { provide: AngularFireFunctions },
        { provide: LocalNotificationService }
      ]
    })
  );

  it('should be created', () => {
    const service: FcmService = TestBed.get(FcmService);
    expect(service).toBeTruthy();
  });
});
