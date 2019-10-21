import { TestBed } from '@angular/core/testing';

import { FileUploadService } from './file-upload.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

describe('FileUploadService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: AngularFirestore }, { provide: AngularFireStorage }]
    })
  );

  it('should be created', () => {
    const service: FileUploadService = TestBed.get(FileUploadService);
    expect(service).toBeTruthy();
  });
});
