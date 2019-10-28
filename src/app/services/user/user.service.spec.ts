import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { EventLoggerService } from '../logger/event-logger.service';
import { FcmService } from 'src/app/fcm.service';

describe('UserService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFireFunctions },
        { provide: AngularFirestore },
        { provide: AngularFireAuth },
        { provide: EventLoggerService },
        { provide: FcmService }
      ]
    })
  );

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
