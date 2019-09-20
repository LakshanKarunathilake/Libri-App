import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {
  constructor(private userService: UserService) {}

  libraryIdValidator = (control: AbstractControl): { [key: string]: any } | null => {
    const id = control.value;
    const data = this.userService.isUserRegistered(id);
    if (!data) {
      return null;
    } else {
      return { userRegistered: true };
    }
  };
}
