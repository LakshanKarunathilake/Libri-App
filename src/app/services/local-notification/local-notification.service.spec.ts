import { TestBed } from '@angular/core/testing';

import { LocalNotificationService } from './local-notification.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

describe('LocalNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [LocalNotifications] }));

  it('should be created', () => {
    const service: LocalNotificationService = TestBed.get(LocalNotificationService);
    expect(service).toBeTruthy();
  });
});
