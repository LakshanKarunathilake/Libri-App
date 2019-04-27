import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert';
import * as firebase from 'firebase';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  ForgetPasswordForm: FormGroup;
  invalidEmail: any = true;
  emptyField = true;

  constructor(private fb: FormBuilder, private modalController: ModalController) {}

  ngOnInit() {
    this.ForgetPasswordForm = this.fb.group({
      userEmail: ['', [Validators.required, Validators.email]]
    });
  }

  getErrorMessage = (controller: string) => {
    const formController = this.ForgetPasswordForm.controls[controller];
    return formController.hasError('required')
      ? 'You must enter a value'
      : formController.hasError('email')
      ? 'Not a valid email'
      : '';
  };

  checkFormControlIsValid(control: string) {
    return this.ForgetPasswordForm.controls[control].invalid;
  }

  forgetPassword = () => {
    const email = this.ForgetPasswordForm.controls['userEmail'].value;
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return this.modalController.dismiss();
      })
      .then(() => {
        swal('Your Password reset email is sent successfully!, Please check your email');
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          swal('Such user does not exist in our database please check your email again');
        }
        console.log('error occured while resetting the password');
        console.error(error);
      });
  };

  dismissModal = () => {
    this.modalController.dismiss();
  };
}
