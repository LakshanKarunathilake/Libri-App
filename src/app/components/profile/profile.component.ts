import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor() { }

  // Sending a password reset email
  resetPassword = () => {
    this.swal.displayConfirmation(
      'Confrimation',
      'You are about to reset your password please confirm your request',
      () => this.user.resetPassword()
    );
  };

}
