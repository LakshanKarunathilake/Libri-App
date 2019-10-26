import { TestBed } from '@angular/core/testing';

import { SwalService } from './swal.service';

xdescribe('SwalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwalService = TestBed.get(SwalService);
    expect(service).toBeTruthy();
  });
});
