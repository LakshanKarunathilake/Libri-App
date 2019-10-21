import { AngularFireFunctionsModule, AngularFireFunctions } from '@angular/fire/functions';
import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user/user.service';
import { LoadingController } from '@ionic/angular';
import { SwalService } from '../swal/swal.service';
import { EventLoggerService } from '../logger/event-logger.service';
import { FileUploadService } from '../file-upload/file-upload.service';
import { AngularFireModule } from '@angular/fire';

describe('BookService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AngularFireModule],
      providers: [
        AngularFireFunctions,
        AngularFirestore,
        UserService,
        LoadingController,
        SwalService,
        EventLoggerService,
        FileUploadService
      ]
    })
  );

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });
});
