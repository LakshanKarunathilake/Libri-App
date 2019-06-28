import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookService } from 'src/app/services/book/book.service';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  constructor(private modalController: ModalController, private bookService: BookService) {}
  @Input() book: Book;
  availability;
  async ngOnInit() {
    this.bookService.checkBookAvailabilityStatus(this.book.biblionumber).then(data => {
      console.log('data', data['data']['loanDate']);
      this.availability = data['data']['loanDate'];
    });
  }

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
