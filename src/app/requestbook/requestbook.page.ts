import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { SwalService } from '../services/swal/swal.service';
@Component({
  selector: 'app-requestbook',
  templateUrl: './requestbook.page.html',
  styleUrls: ['./requestbook.page.scss']
})
export class RequestbookPage implements OnInit {
  constructor(private fb: FormBuilder, private chooser: FileChooser, private swal: SwalService) {}
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

  openFileChooser = () => {
    this.chooser
      .open()
      .then(uri => console.log(uri))
      .catch(e =>
        this.swal.viewErrorMessage(
          'Error',
          'Sorry to upload files you have to be in Android or iOS'
        )
      );
  };

  openFile = file => {
    const input = file.target;

    const reader = new FileReader();
    reader.onload = function() {
      const dataURL = reader.result;
      const output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };

  onSubmit = () => {};
}
