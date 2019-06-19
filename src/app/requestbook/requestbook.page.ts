import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SwalService } from '../services/swal/swal.service';
@Component({
  selector: 'app-requestbook',
  templateUrl: './requestbook.page.html',
  styleUrls: ['./requestbook.page.scss']
})
export class RequestbookPage implements OnInit {
  constructor(private fb: FormBuilder, private swal: SwalService) {}
  requestForm: FormGroup;

  ngOnInit() {
    this.requestForm = this.fb.group({
      title: ['', Validators.required],
      authors: ['', [Validators.required]],
      category: ['', [Validators.required]],
      ISBN: ['', [Validators.required]],
      description: ['', Validators.required]
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

  onSubmit = () => {};
}
