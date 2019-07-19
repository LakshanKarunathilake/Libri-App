import { Component, OnInit, Input } from '@angular/core';
import { Borrowing } from 'src/app/models/Borrowings';

@Component({
  selector: 'collapsible-list',
  templateUrl: './collapsible-list.component.html',
  styleUrls: ['./collapsible-list.component.scss']
})
export class CollapsibleListComponent implements OnInit {
  constructor() {}
  @Input() title;
  @Input() titleDescription;
  @Input() borrowings: Borrowing[];

  ngOnInit() {
    console.log('borrowings', this.borrowings);
  }
}
