import { TestBed } from '@angular/core/testing';

import { EventLoggerService } from './event-logger.service';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { UserService } from '../user/user.service';
import { PlatformService } from '../platform/platform.service';
import { AngularFirestore } from '@angular/fire/firestore';

describe('EventLoggerService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        FirebaseAnalytics,
        { provide: UserService },
        { provide: PlatformService },
        { provide: AngularFirestore }
      ]
    })
  );

  it('should be created', () => {
    const service: EventLoggerService = TestBed.get(EventLoggerService);
    expect(service).toBeTruthy();
  });
});
