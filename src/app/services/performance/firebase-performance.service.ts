import { Injectable } from '@angular/core';
import { performance } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class FirebasePerformanceService {
  private performance: performance.Performance;
  private screenTrace: performance.Trace;
  constructor() {}

  startScreenTrace = (name: string) => {
    this.performance = performance();
    this.screenTrace = this.performance.trace(name);
    this.screenTrace.start();
  };

  endScreenTrace = () => {
    this.screenTrace.stop();
  };
}
