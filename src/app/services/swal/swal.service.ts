import { Injectable } from '@angular/core';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class SwalService {
  constructor() {}

  viewSuccessMessage = (title: string, description: string) => {
    swal(title, description, 'success');
  };

  viewErrorMessage = (title: string, description: string) => {
    swal(title, description, 'error');
  };
}
