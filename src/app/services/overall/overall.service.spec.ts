import { TestBed } from '@angular/core/testing';

import { OverallService } from './overall.service';

xdescribe('OverallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OverallService = TestBed.get(OverallService);
    expect(service).toBeTruthy();
  });
});
