import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage implements OnInit {
  pages = [
    { title: 'Search Book', url: 'booksearch' },
    { title: 'Contact Us', url: 'contact' },
    { title: 'Request Book', url: 'requestbook' },
    { title: 'My Profile', url: 'profile' },
    { title: 'Account', url: 'profile/account' }
  ];
  width = window.innerWidth;
  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
        console.log('event.url', event.url);
      }
    });
  }

  isSelectedPath = url => {
    return this.selectedPath.indexOf(url) >= 0;
  };

  moveToHomePage = () => {
    this.router.navigateByUrl('/home');
  };

  ngOnInit() {}
}
