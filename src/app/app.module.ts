import { FirebasePerformanceService } from './services/performance/firebase-performance.service';
import { SwalService } from './services/swal/swal.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

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
import { DropZoneDirective } from './directives/dropZone/drop-zone.directive';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent, DropZoneDirective],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RecaptchaModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireFunctionsModule,
    AngularFirestoreModule,
    AngularFirePerformanceModule,
    AngularFireStorageModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FcmService,
    SwalService,
    EventLoggerService,
    FirebaseAnalytics,
    PlatformService,
    Device
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
