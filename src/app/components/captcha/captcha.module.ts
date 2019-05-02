import { NgModule } from '@angular/core';
import { CaptchaComponent } from './captcha.component';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';

@NgModule({
  imports: [RecaptchaModule],
  declarations: [CaptchaComponent],
  exports: [CaptchaComponent],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LfxHaEUAAAAAB4hTZ5LruDo-jF4CP8GgGGY09Dr'
      } as RecaptchaSettings
    }
  ]
})
export class CaptchaComponentModule {}
