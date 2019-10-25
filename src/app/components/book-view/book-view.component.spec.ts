import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookViewComponent } from './book-view.component';
import { ModalController } from '@ionic/angular';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { Device } from '@ionic-native/device/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { BookService } from 'src/app/services/book/book.service';

class MockUserService {
  book = { biblionumber: 'Test User' };
}

describe('BookViewComponent', () => {
  let component: BookViewComponent;
  let fixture: ComponentFixture<BookViewComponent>;
  const modalSpy = jasmine.createSpyObj('Modal', ['present']);
  const modalCtrlSpy = jasmine.createSpyObj('ModalController', ['create']);
  modalCtrlSpy.create.and.callFake(function() {
    return modalSpy;
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookViewComponent],
      providers: [
        { provide: AngularFireFunctions },
        { provide: AngularFireAuth },
        { provide: AngularFireMessaging },
        { provide: AngularFirestore },
        { provide: AngularFireStorage },
        { provide: FirebaseAnalytics },
        { provide: Device },
        { provide: LocalNotifications },
        { provide: ModalController, useValue: modalCtrlSpy },
        { provide: BookService, useClass: MockUserService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
