import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BorrowingsComponent } from './borrowings.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireStorage } from '@angular/fire/storage';
import { LocalNotifications } from '@capacitor/core';
import { Device } from '@ionic-native/device/ngx';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';

describe('BorrowingsComponent', () => {
  let component: BorrowingsComponent;
  let fixture: ComponentFixture<BorrowingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowingsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AngularFireFunctions },
        { provide: AngularFireAuth },
        { provide: AngularFireMessaging },
        { provide: AngularFirestore },
        { provide: AngularFireStorage },
        { provide: FirebaseAnalytics },
        { provide: LocalNotifications },
        { provide: Device }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
