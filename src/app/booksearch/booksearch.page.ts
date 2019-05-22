import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.page.html',
  styleUrls: ['./booksearch.page.scss']
})
export class BooksearchPage implements OnInit {
  sampleBooks = [
    {
      name: 'Harry Potter & deathly hallows',
      authors: 'J.K. Rowling',
      description: `A clash between good and evil awaits as young Harry (Daniel Radcliffe), Ron (Rupert
        Grint) and Hermione (Emma Watson) prepare for a final battle against Lord Voldemort
        (Ralph Fiennes). Harry has grown into a steely lad on a mission to rid the world of
        evil. The friends must search for the Horcruxes that keep the dastardly wizard immortal.
        Harry and Voldemort meet at Hogwarts Castle for an epic showdown where the forces of
        darkness may finally meet their match.`,
      image: '../assets/img/harry_potter.jpg'
    },
    {
      name: 'Game of Thrones',
      authors: 'George R.R. Martin',
      description: ` A Storm of Swords is the third of seven planned novels in A Song of Ice and Fire, a
      fantasy series by American author George R. R. Martin. It was first published on August
      8, 2000, in the United Kingdom,[1] with a United States edition following in November
      2000. Its publication was preceded by a novella called Path of the Dragon, which
      collects some of the Daenerys Targaryen chapters from the novel into a single book.`,
      image: '../assets/img/gameofthrones.jpg'
    },
    {
      name: 'Head first Java',
      authors: 'Kathy Sierra, Bert Bates',
      description: `Between Moore's law and the notion of "Internet time," we're constantly being bombarded
      with more and more information--most of it in the form of disorganized data. Turning
      this information into useful knowledge is getting harder and harder to do, and it takes
      time that we just don't have. The current economic situation hasn't helped either. With
      money spread thin, who hasn't had to take on new tasks and learn new things? And slashed
      training budgets mean there's little to rely on for learning except books- but learning
      a complex new programming language like Java from a book is no simple task. Maybe your
      boss is giving you two weeks to come up to speed for a`,
      image: '../assets/img/headfirstjava.jpg'
    }
  ];

  deviceType: string;
  constructor() {}
  constructor(private bookService: BookService) {}

  ngOnInit() {}
}
