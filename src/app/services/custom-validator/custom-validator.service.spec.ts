import { TestBed } from '@angular/core/testing';

import { CustomValidatorService } from './custom-validator.service';

xdescribe('CustomValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomValidatorService = TestBed.get(CustomValidatorService);
    expect(service).toBeTruthy();
  });
});
