import { BookService } from './../../services/book/book.service';
import { BookViewComponent } from '../book-view/book-view.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'book-search-view',
  templateUrl: './book-search-view.component.html',
  styleUrls: ['./book-search-view.component.scss']
})
export class BookSearchView implements OnInit {
  @Input() book: Book;
  constructor(private modalController: ModalController, private bookService: BookService) {}

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

  getImage = (url: string) => {
    return url.includes('jpg') || url.includes('png') || url.includes('jpeg');
  };

  saveBook = () => {
    this.bookService.addBookToShelf(this.book);
  };

  reserveBook = () => {
    this.bookService.reserveBook(this.book);
  };
}
