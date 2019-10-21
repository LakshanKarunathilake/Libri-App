import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { Platform } from '@angular/cdk/platform';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireFunctions } from '@angular/fire/functions';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AngularFireAuth } from '@angular/fire/auth';

describe('UserService', () => {
  let platformSpy, platformReadySpy;
  beforeEach(() => {
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });
    platformReadySpy = Promise.resolve();
    TestBed.configureTestingModule({
      providers: [
        AngularFireAuth,
        { provide: Platform, useValue: platformSpy },
        { provide: AngularFireMessaging },
        { provide: AngularFireFunctions },
        { provide: LocalNotifications }
      ]
    });
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
