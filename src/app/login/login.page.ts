import { PlatformService } from './../services/platform/platform.service';
import { SwalService } from './../services/swal/swal.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ForgetPasswordComponent } from '../components/forget-password/forget-password.component';
import { EventLoggerService } from '../services/logger/event-logger.service';
import { FcmService } from '../fcm.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  loading;
  /**
   *
   * @param fb Form builder for building the forms in angular material
   * @param afa Authentication service from the Angular fire
   * @param router Routing service for the ionic navigation
   * @param loadingController Loading component service to preview preloader
   * @param modalController Modal service to present the modal
   * @param swal Swal service for the custom implementation for the sweet alerts
   * @param fcm Firebase Cloud Messaging service for the notification creation
   * @param loggger Logiing service for the analytics dashboard in Firebase
   * @param platformService Service for retrieve the platform information and device information
   */
  constructor(
    private fb: FormBuilder,
    private afa: AngularFireAuth,
    private router: Router,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private swal: SwalService,
    private loggger: EventLoggerService,
    private user: UserService
  ) {
    this.loadingController.create({
      message: 'Please wait verifying!',
      duration: 2000
    });
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', Validators.required]
    });
  }

  public hasError(controlName: string, errorName: string) {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  loginAction = async () => {
    const userEmail = this.loginForm.controls['userEmail'].value;
    const userPassword = this.loginForm.controls['userPassword'].value;
    const loading = await this.loadingController.create({
      message: 'Veryfying your details!'
    });
    await loading.present();
    this.afa.auth
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(data => {
        if (data.user.emailVerified) {
          this.swal.displayAutoHideMessage('Welcome back!', '', 'success', 1500);
          this.router.navigateByUrl('menu', { replaceUrl: true });
          // Subscribing for user topics
          this.user.subscribeForUserTopics();
          // Update user token
          this.user.registerToken();
          // Record login attempt
          this.loggger.loginAttempt();
          // Registering for crashlytics
          this.user.registerCrashlytics();
        } else {
          this.swal.displayConfirmation(
            'Error',
            'Please verify your email before login. Click confirm to send the email again',
            reply => {
              if (reply) {
                this.user.sendConfirmationEmail();
              }
            }
          );
        }
      })
      .catch(error => {
        console.log('error :', error, error.message);

        this.previewErrorMessage(error);
      })
      .finally(() => loading.dismiss());
  };

  getErrorMessage = (controller: string) => {
    const formController = this.loginForm.controls[controller];
    return formController.hasError('required')
      ? 'You must enter a value'
      : formController.hasError('email')
      ? 'Not a valid email'
      : '';
  };

  checkFormControlIsValid(control: string) {
    return this.loginForm.controls[control].invalid;
  }

  previewErrorMessage = ({ code, message }) => {
    const swalProps = { title: '', description: '' };
    switch (code) {
      case 'network-request-failed':
        swalProps.description = 'Check your internet Connection';
        swalProps.title = 'Connection Failure';
        break;
      case 'auth/user-disabled':
        swalProps.description = 'Your connection is disabled please contact authority';
        swalProps.title = 'Account disabled';
        break;
      case 'auth/wrong-password':
        swalProps.description = 'Your password is incorrect';
        swalProps.title = 'Wrong Password';
        break;
      default:
        console.log('executing default');
        swalProps.description = message;
        swalProps.title = 'Error';
        break;
    }
    this.swal.viewErrorMessage(swalProps.title, swalProps.description);
  };

  forgetPassword = async () => {
    const modal = await this.modalController.create({
      component: ForgetPasswordComponent
    });
    modal.present();
  };
}
