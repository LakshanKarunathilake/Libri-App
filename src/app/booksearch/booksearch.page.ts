import { BookService } from './../services/book/book.service';
import { Component, OnInit } from '@angular/core';
import { EventLoggerService } from '../services/logger/event-logger.service';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.page.html',
  styleUrls: ['./booksearch.page.scss']
})
export class BooksearchPage implements OnInit {
  deviceType: string;
  titleCheckbox = true;
  authorCheckbox = true;
  books: any;
  loading = false;
  constructor(private bookService: BookService, private logger: EventLoggerService) {}

  ngOnInit() {}

  searchForbooks = value => {
    const searchType = this.generateSearchType();
    if (value !== '') {
      this.logger.bookSearchEVent(value);
      this.books = undefined;
      this.loading = true;
      this.bookService.searchBooks(value, searchType).then(data => {
        this.books = JSON.parse(data.data['result']).map(record => {
          const url = record['url'];
          if (url) {
            const alteredURL = this.breakImageUrls(url);
            console.log('al', alteredURL);
            record['url'] = alteredURL;
          }
          return record;
        });
        console.log(this.books);
        this.loading = false;
      });
      console.log('value', value);
    }
  };

  /**
   * Split the book image urls
   * Some books contains array of urls so it should be separated otherwise it may not be able to preview
   * @param url - url string of the book images
   */
  breakImageUrls = (url: string) => {
    if (url.indexOf('|') !== -1) {
      const image = url.split('|')[1];
      console.log('image', image);
      return image
        .concat('.jpg')
        .split(' ')
        .join('');
    } else {
      return url;
    }
  };

  generateSearchType = () => {
    if (this.titleCheckbox && this.authorCheckbox) {
      return 'both';
    } else if (this.titleCheckbox) {
      return 'title';
    } else {
      return 'author';
    }
  };
}
