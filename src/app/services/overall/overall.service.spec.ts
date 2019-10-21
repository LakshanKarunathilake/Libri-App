import { TestBed } from '@angular/core/testing';

import { OverallService } from './overall.service';
import { AngularFirestore } from '@angular/fire/firestore';

describe('OverallService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: AngularFirestore }]
    })
  );

  it('should be created', () => {
    const service: OverallService = TestBed.get(OverallService);
    expect(service).toBeTruthy();
  });
});
