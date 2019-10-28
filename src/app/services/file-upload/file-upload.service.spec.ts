import { TestBed } from '@angular/core/testing';

import { FileUploadService } from './file-upload.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

describe('FileUploadService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: AngularFireStorage }, { provide: AngularFirestore }]
    })
  );

  it('should be created', () => {
    const service: FileUploadService = TestBed.get(FileUploadService);
    expect(service).toBeTruthy();
  });
});
