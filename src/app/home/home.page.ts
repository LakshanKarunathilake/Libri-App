import { Component, OnInit } from '@angular/core';
import { FcmService } from '../fcm.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  sliderOptions = { slidesPerView: 2, spaceBetween: 0 };
  constructor(public fcm: FcmService) {}

  ngOnInit() {}

  getPermission = () => {
    console.log('getting permission');
    this.fcm
      .getPermission()
      .then(() => this.fcm.sub('notices'))
      .catch(error => {
        console.log('error occured');
        console.log('error', error);
        swal('error');
      });
  };
}
