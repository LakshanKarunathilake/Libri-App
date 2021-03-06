import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { FcmService } from '../fcm.service';
import { SwalService } from '../services/swal/swal.service';
import { CustomValidatorService } from '../services/custom-validator/custom-validator.service';
import { EventLoggerService } from '../services/logger/event-logger.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;
  loading;
  hide = true; // Toggling password visibility
  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private fcm: FcmService,
    private swal: SwalService,
    private user: UserService,
    private customValidation: CustomValidatorService,
    private logger: EventLoggerService
  ) {
    this.signupForm = this.fb.group({
      displayName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      libraryId: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: this.customValidation.libraryIdValidator,
        updateOn: 'blur'
      }),
      password: ['', Validators.required],
      telephoneNumber: ['', Validators.required]
    });
  }

  ngOnInit() {}

  getErrorMessage = (controller: string) => {
    const formController = this.signupForm.controls[controller];
    return formController.hasError('required')
      ? 'You must enter a value'
      : formController.hasError('email')
      ? 'Not a valid email'
      : '';
  };

  checkFormControlIsValid(control: string) {
    return this.signupForm.controls[control].invalid;
  }

  onSubmit() {
    const userEmail = this.signupForm.controls['email'].value;
    const userPassword = this.signupForm.controls['password'].value;
    const displayName: string = this.signupForm.controls['displayName'].value;
    const phoneNumber: string = this.signupForm.controls['telephoneNumber'].value;
    const libraryId: string = this.signupForm.controls['libraryId'].value;

    console.log('userEmail :', typeof userEmail);
    console.log('userPassword :', typeof userPassword);
    this.presentLoading();
    try {
      this.user
        .createUser(userEmail, userPassword)
        .then(() => {
          this.hideLoading();
          return this.user.updateUserDetails(displayName, phoneNumber, libraryId);
        })
        .then(() => {
          console.log('Successfully updated the additional user information');
          return this.user.sendConfirmationEmail();
        })
        .then(() => {
          this.swal.viewSuccessMessage(
            'Welcome!',
            'Registration Successful, please confirm your email address!'
          );
          return this.fcm.getPermission();
        })
        .then(() => this.fcm.sub('notices'))
        .then(() => this.logger.registerAttempt())
        .catch(error => {
          this.hideLoading();
          console.log('error :', error.message);
          this.swal.viewErrorMessage('Error!', error.message);
        });
    } catch (error) {
      this.hideLoading();
      console.log('error :', error);
    }
  }

  presentLoading = async () => {
    this.loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      message: 'Processing your request'
    });
    await this.loading.present();
  };

  hideLoading = () => {
    this.loading.dismiss();
  };
}
