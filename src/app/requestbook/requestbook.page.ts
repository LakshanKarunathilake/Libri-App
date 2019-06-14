import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-requestbook',
  templateUrl: './requestbook.page.html',
  styleUrls: ['./requestbook.page.scss']
})
export class RequestbookPage implements OnInit {
  constructor(private fb: FormBuilder) {}
  requestForm: FormGroup;

  ngOnInit() {
    this.requestForm = this.fb.group({
      displayName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      libraryId: ['', [Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      telephoneNumber: ['', Validators.required]
    });
  }

  getErrorMessage = (controller: string) => {
    const formController = this.requestForm.controls[controller];
    return formController.hasError('required')
      ? 'You must enter a value'
      : formController.hasError('email')
      ? 'Not a valid email'
      : '';
  };

  checkFormControlIsValid(control: string) {
    return this.requestForm.controls[control].invalid;
  }

  onSubmit = () =>{
    
  }
}
