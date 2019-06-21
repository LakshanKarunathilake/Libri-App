import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { SwalService } from '../services/swal/swal.service';
import { BookService } from '../services/book/book.service';
@Component({
  selector: 'app-requestbook',
  templateUrl: './requestbook.page.html',
  styleUrls: ['./requestbook.page.scss']
})
export class RequestbookPage implements OnInit {
  constructor(
    private fb: FormBuilder,
    private swal: SwalService,
    private bookService: BookService
  ) {}
  requestForm: FormGroup;

  ngOnInit() {
    this.requestForm = this.fb.group({
      title: ['', Validators.required],
      // authors: ['', [Validators.required]],
      authors: this.fb.array([
        this.fb.group({
          author: ['', Validators.required]
        })
      ]),
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

  get authors() {
    return this.requestForm.get('authors') as FormArray;
  }

  addAuthor() {
    const author = this.fb.group({
      author: ['', Validators.required]
    });
    this.authors.push(author);
  }

  removeAuthor(i) {
    this.authors.removeAt(i);
  }

  checkFormControlIsValid(control: string) {
    return this.requestForm.controls[control].invalid;
  }

  onSubmit = () => {
    // this.bookService.placingBookRequest();
  };
}
