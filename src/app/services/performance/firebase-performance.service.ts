import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class FirebasePerformanceService {
  performance: firebase.performance.Performance;
  screenTrace: firebase.performance.Trace;
  constructor() {
    this.performance = firebase.performance();
  }

  startScreenTrace = (name: string) => {
    this.screenTrace = this.performance.trace(name);
    this.screenTrace.start();
  };

  endScreenTrace = () => {
    this.screenTrace.stop();
  };
}
