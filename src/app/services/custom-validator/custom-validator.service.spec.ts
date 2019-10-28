import { TestBed } from '@angular/core/testing';

import { CustomValidatorService } from './custom-validator.service';
import { UserService } from '../user/user.service';

describe('CustomValidatorService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: UserService }]
    })
  );

  it('should be created', () => {
    const service: CustomValidatorService = TestBed.get(CustomValidatorService);
    expect(service).toBeTruthy();
  });
});
