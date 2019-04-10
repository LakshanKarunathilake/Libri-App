import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private afa: AngularFireAuth, private router: Router) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      userEmail: ['', Validators.required],
      userPassword: ['', Validators.required]
    });
  }
  public hasError(controlName: string, errorName: string) {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  loginAction() {
    const userEmail = this.loginForm.controls['userEmail'].value;
    const userPassword = this.loginForm.controls['userPassword'].value;
    try {
      this.afa.auth
        .signInWithEmailAndPassword(userEmail, userPassword)
        .then(() => {
          swal('Welcome back!', '', 'success');
          this.router.navigateByUrl('menu');
        })
        .catch(error => {
          console.log('error :', error, error.message);
          this.previewErrorMessage(error);
        });
    } catch (error) {
      console.log('error Occured  :', error, error.message);
    }
  }

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
    const swalProps = { title: '', type: 'error', description: '' };
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
    swal(swalProps.title, swalProps.description, swalProps.type);
  };
}
