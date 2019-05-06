import { SwalService } from './../services/swal/swal.service';
import { Component, OnInit } from '@angular/core';
import { FcmService } from '../fcm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  sliderOptions = { slidesPerView: 2, spaceBetween: 0 };
  constructor(public fcm: FcmService, private swal: SwalService) {}

  ngOnInit() {}

  getPermission = () => {
    console.log('getting permission');
    this.fcm
      .getPermission()
      .then(() => this.fcm.sub('notices'))
      .catch(error => {
        console.log('error occured');
        console.log('error', error);
        this.swal.viewErrorMessage('error', 'You have not subscribed for the notices');
      });
  };
}
