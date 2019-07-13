import { SwalService } from './../services/swal/swal.service';
import { Component, OnInit } from '@angular/core';
import { FcmService } from '../fcm.service';
import { Platform } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { Observable } from 'rxjs';
import { Notice } from '../models/Notice';

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
  notices: Observable<Notice[]>;
  constructor(
    public fcm: FcmService,
    private swal: SwalService,
    private platform: Platform,
    private userService: UserService
  ) {}

  ngOnInit() {
    const { uid } = this.userService.getCurrentUser();
    this.userService.getUserBorrowings(uid).then(({ data }) => console.log('data', data['result']));
    this.notices = this.userService.getNotices();
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
