import { Component, OnInit, Input } from '@angular/core';
import { Borrowing } from 'src/app/models/Borrowings';

@Component({
  selector: 'item-transfer',
  templateUrl: './item-transfer.component.html',
  styleUrls: ['./item-transfer.component.scss']
})
export class ItemTransferComponent implements OnInit {
  @Input() moveHeader: Function;
  @Input() borrowDetails: Borrowing;
  constructor() {}

  ngOnInit() {}

  /**
   * Initiate a book transfer
   */
  transfer = () => {
    this.moveHeader();
  };
}
