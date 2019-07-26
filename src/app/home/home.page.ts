import { Borrowing } from './../models/Borrowings';
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
  borrowings: Borrowing[];
  overdues: Borrowing[];
  personalInfo;
  notices: Observable<Notice[]>;
  constructor(
    public fcm: FcmService,
    private swal: SwalService,
    private platform: Platform,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.borrowings = await this.userService.getUserBorrowings();
    this.overdues = this.userService.getOverDues();
    this.notices = this.userService.getNotices();
  }

  /**
   * View more information related to the information such as published date and due date
   */
  noticeMoreDetails = (notice: Notice) => {
    this.swal.displayNotice(notice);
  };
}
