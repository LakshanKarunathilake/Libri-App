import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  sliderOptions = { slidesPerView: 2, spaceBetween: 10 };
  constructor() {}

  ngOnInit() {}
}
