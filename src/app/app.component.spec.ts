import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { IonRouterOutlet } from '@ionic/angular';
import { SwalService } from './services/swal/swal.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FcmService } from './fcm.service';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RecaptchaModule } from 'ng-recaptcha';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { EventLoggerService } from './services/logger/event-logger.service';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { PlatformService } from './services/platform/platform.service';
import { Device } from '@ionic-native/device/ngx';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FCM } from 'capacitor-fcm';
import { LocalNotificationService } from './services/local-notification/local-notification.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { LoginPageModule } from './login/login.module';
import { SignupPageModule } from './signup/signup.module';
import { MenuPageModule } from './menu/menu.module';

describe('AppComponent', () => {
  let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy;

  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        IonicModule.forRoot(),
        RecaptchaModule.forRoot(),
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        LoginPageModule,
        AngularFireModule.initializeApp({
          firebase: {
            apiKey: 'AIzaSyDuPVBd60jVbPw1BRefZsTkWb2AXZsfzNk',
            authDomain: 'libri-238805.firebaseapp.com',
            databaseURL: 'https://libri-238805.firebaseio.com',
            projectId: 'libri-238805',
            storageBucket: 'libri-238805.appspot.com',
            messagingSenderId: '696789073783',
            appId: '1:696789073783:web:3579e974bc60674c'
          }
        }),
        AngularFireAuthModule,
        AngularFireMessagingModule,
        AngularFireFunctionsModule,
        AngularFirestoreModule,
        AngularFirePerformanceModule,
        AngularFireStorageModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        RouterModule.forRoot([])
      ],
      declarations: [AppComponent],
      providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        FcmService,
        SwalService,
        EventLoggerService,
        FirebaseAnalytics,
        PlatformService,
        Device,
        FCM,
        LocalNotificationService,
        LocalNotifications,
        IonRouterOutlet,

        ,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should initialize the app', async () => {
  //   TestBed.createComponent(AppComponent);
  //   expect(platformSpy.ready).toHaveBeenCalled();
  //   await platformReadySpy;
  //   expect(statusBarSpy.styleDefault).toHaveBeenCalled();
  //   expect(splashScreenSpy.hide).toHaveBeenCalled();
  // });

  // TODO: add more tests!
});
