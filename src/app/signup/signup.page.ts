import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import swal from 'sweetalert';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController } from '@ionic/angular';
import { auth } from 'firebase';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;
  loading;
  constructor(
    private fb: FormBuilder,
    private afa: AngularFireAuth,
    private loadingCtrl: LoadingController
  ) {
    this.signupForm = this.fb.group({
      displayName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
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
    console.log('userEmail :', typeof userEmail);
    console.log('userPassword :', typeof userPassword);
    this.presentLoading();
    try {
      this.afa.auth
        .createUserWithEmailAndPassword(userEmail, userPassword)
        .then(() => {
          this.hideLoading();
          return auth()
            .currentUser.sendEmailVerification()
            .then(() => {
              swal(
                'Welcome!',
                'Regaistraion Successful, please confirm your email address!',
                'success'
              );
            });
        })
        .catch(error => {
          this.hideLoading();
          console.log('error :', error.message);
          swal('Error!', error.message, 'error');
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
