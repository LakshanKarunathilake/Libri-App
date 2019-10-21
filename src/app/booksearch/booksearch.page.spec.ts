import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksearchPage } from './booksearch.page';
import { BookViewComponent } from '../components/book-view/book-view.component';
import { BookSearchView } from '../components/book-search-view/book-search-view.component';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { Device } from '@ionic-native/device/ngx';
import { AngularFireStorage } from '@angular/fire/storage';

describe('BooksearchPage', () => {
  let component: BooksearchPage;
  let fixture: ComponentFixture<BooksearchPage>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BooksearchPage, BookViewComponent, BookSearchView],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AngularFireFunctions },
        { provide: AngularFireAuth },
        { provide: AngularFireMessaging },
        { provide: AngularFirestore },
        { provide: AngularFireStorage },
        { provide: FirebaseAnalytics },
        { provide: Device },
        { provide: LocalNotifications }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
