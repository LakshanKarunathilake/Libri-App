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

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  loading;
  constructor(
    private fb: FormBuilder,
    private afa: AngularFireAuth,
    private router: Router,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private swal: SwalService,
    private fcm: FcmService,
    private loggger: EventLoggerService,
    private platformService: PlatformService
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

  private subscribingforNotices = () => {
    this.fcm
      .getPermission()
      .then(() => this.fcm.sub('notices'))
      .catch(error => {
        console.error('Error occured', error);
      });
  };

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
      .then(() => {
        // Loggin the event of login
        this.loggger.loginEvent();
        // Subscribing for notices
        this.subscribingforNotices();
        this.swal.viewSuccessMessage('Welcome back!', '');
        this.router.navigateByUrl('menu');
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
