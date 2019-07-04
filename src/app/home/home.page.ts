import { SwalService } from './../services/swal/swal.service';
import { Component, OnInit } from '@angular/core';
import { FcmService } from '../fcm.service';
import { Platform } from '@ionic/angular';
import { UserService } from '../services/user/user.service';

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
  personalInfo;
  constructor(
    public fcm: FcmService,
    private swal: SwalService,
    private platform: Platform,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUserBorrowings().then(data => console.log('data', data));
  }

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
