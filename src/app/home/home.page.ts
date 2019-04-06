import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  pages = [
    { title: 'Search Book', url: 'booksearch', icon: 'home' },
    { title: 'Contact Us', url: 'contact', icon: 'home' },
    { title: 'Request Book', url: 'requestbook', icon: 'home' }
  ];

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
        console.log('event.url', event.url);
      }
    });
  }

  ngOnInit() {}
}
