import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  constructor(private modalController: ModalController, private bookService: BookService) {}
  @Input() book;
  ngOnInit() {}

  /**
   * Closing the book view modal
   */
  closeModal = () => {
    this.modalController.dismiss();
  };

  /**
   * Adding book to the personal book shelf
   */
  saveBook = () => {
    this.bookService.addBookToShelf(this.book);
  };
}
