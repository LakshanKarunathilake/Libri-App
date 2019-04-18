import { Component, OnInit } from '@angular/core';
import { FcmService } from '../fcm.service';

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
    this.fcm.getPermission();
  };
}
