import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class FirebasePerformanceService {
  private performance: firebase.performance.Performance;
  private screenTrace: firebase.performance.Trace;
  constructor() {}

  startScreenTrace = (name: string) => {
    this.performance = firebase.performance();
    this.screenTrace = this.performance.trace(name);
    this.screenTrace.start();
  };

  endScreenTrace = () => {
    this.screenTrace.stop();
  };
}
