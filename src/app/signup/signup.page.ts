import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder) {
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
    console.log('asdasdsad');
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
    console.log('clicked', this.signupForm.invalid);
  }
}
