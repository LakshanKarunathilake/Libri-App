import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookViewComponent } from '../components/book-view/book-view.component';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.page.html',
  styleUrls: ['./booksearch.page.scss']
})
export class BooksearchPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  bookPreview = async () => {
    console.log('clicked');
    const modal = await this.modalController.create({
      component: BookViewComponent,
      componentProps: {
        bookName: 'dfdsfdsf',
        id: 'dafsdfsd'
      }
    });
    modal.present();
  };
}
