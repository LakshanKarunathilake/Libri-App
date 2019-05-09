import { BookViewComponent } from '../book-view/book-view.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'book-search-view',
  templateUrl: './book-search-view.component.html',
  styleUrls: ['./book-search-view.component.scss']
})
export class BookSearchView implements OnInit {
  @Input() book;
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  bookPreview = async () => {
    console.log('clicked');
    const modal = await this.modalController.create({
      component: BookViewComponent,
      componentProps: {
        book: this.book
      },
      cssClass: 'book-view-modal'
    });
    modal.present();
  };
}
