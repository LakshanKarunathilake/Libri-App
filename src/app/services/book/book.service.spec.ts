import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { EventLoggerService } from '../logger/event-logger.service';
import { FileUploadService } from '../file-upload/file-upload.service';

describe('BookService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFireFunctions },
        { provide: AngularFirestore },
        { provide: UserService },
        { provide: AngularFireAuth },
        { provide: EventLoggerService },
        { provide: FileUploadService }
      ]
    })
  );

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });
});
