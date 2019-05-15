import { TestBed } from '@angular/core/testing';

import { FirebasePerformanceService } from './firebase-performance.service';

describe('FirebasePerformanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebasePerformanceService = TestBed.get(FirebasePerformanceService);
    expect(service).toBeTruthy();
  });
});
