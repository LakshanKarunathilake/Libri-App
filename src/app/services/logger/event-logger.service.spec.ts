import { TestBed } from '@angular/core/testing';

import { EventLoggerService } from './event-logger.service';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { Platform } from '@ionic/angular';

describe('EventLoggerService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: FirebaseAnalytics }, { provide: Platform }]
    })
  );

  it('should be created', () => {
    const service: EventLoggerService = TestBed.get(EventLoggerService);
    expect(service).toBeTruthy();
  });
});
