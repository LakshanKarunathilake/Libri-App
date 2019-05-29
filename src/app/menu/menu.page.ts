import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
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
    { title: 'Book transfer', url: 'transfer' },
    { title: 'Feedback', url: 'feedback' },
    { title: 'Request Book', url: 'requestbook' },
    { title: 'Account', url: 'account' }
  ];
  width = window.innerWidth;
  selectedPath = '';

  constructor(
    private router: Router,
    private afa: AngularFireAuth,
    private loadingController: LoadingController
  ) {
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

  logOutUser = async () => {
    const loading = await this.loadingController.create({
      message: 'Please wait logging out...',
      spinner: 'crescent'
    });
    loading.present();
    this.afa.auth
      .signOut()
      .then(() => {
        console.log('Successfully Logged out');
        this.router.navigateByUrl('login');
      })
      .catch(error => {
        console.log('Error occured while logging out');
        console.error(error);
      })
      .finally(() => {
        loading.dismiss();
      });
  };
}
