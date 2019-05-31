import { SwalService } from './../services/swal/swal.service';
import { Component, OnInit } from '@angular/core';
import { FcmService } from '../fcm.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  sliderOptions = {
    slidesPerView: this.platform.width() < 990 ? 3 : 6,
    centerdSlides: true,
    autoplay: { delay: 1500 }
  };
  constructor(public fcm: FcmService, private swal: SwalService, private platform: Platform) {
    console.log(this.platform.width());
  }

  ngOnInit() {}

  getPermission = () => {
    console.log('getting permission');
    this.fcm
      .getPermission()
      .then(() => this.fcm.sub('notices'))
      .catch(error => {
        console.log('error occured');
        console.log('error', error);
        this.swal.viewErrorMessage('error', error);
      });
  };
}
