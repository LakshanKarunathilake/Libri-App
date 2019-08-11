import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item-transfer',
  templateUrl: './item-transfer.component.html',
  styleUrls: ['./item-transfer.component.scss']
})
export class ItemTransferComponent implements OnInit {
  @Input() moveHeader: Function;
  constructor() {}

  ngOnInit() {}

  /**
   * Initiate a book transfer
   */
  transfer = () => {
    this.moveHeader();
  };
}
