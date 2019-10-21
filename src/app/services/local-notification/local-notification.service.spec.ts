import { TestBed } from '@angular/core/testing';

import { LocalNotificationService } from './local-notification.service';
import { LocalNotifications } from '@capacitor/core';

describe('LocalNotificationService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: LocalNotifications }]
    })
  );

  it('should be created', () => {
    const service: LocalNotificationService = TestBed.get(LocalNotificationService);
    expect(service).toBeTruthy();
  });
});
