import { Injectable } from '@angular/core';
import {  AbstractControl } from '@angular/forms';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {
  constructor(private userService: UserService) {}

  libraryIdValidator = async (control: AbstractControl) => {
    const id = control.value;
    const data = await this.userService.isUserRegistered(id);
    console.log('data', data)
    if (data) {
      console.log('not null');
      const reply: Array<String> = JSON.parse(data['data']['result']);
      console.log('reply', reply)
      if (reply.length !== 0) {
        console.log('not empty')
        return null;
      } else {
        return { userExist : false}
      }
    } else {
      return { error: true };
    }
  };
}
