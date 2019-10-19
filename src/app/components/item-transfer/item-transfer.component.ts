import { Component, OnInit, Input } from '@angular/core';
import { Borrowing } from 'src/app/models/Borrowings';
import { SwalService } from 'src/app/services/swal/swal.service';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'item-transfer',
  templateUrl: './item-transfer.component.html',
  styleUrls: ['./item-transfer.component.scss']
})
export class ItemTransferComponent implements OnInit {
  @Input() moveHeader: Function;
  @Input() subscribeToTransferReq: Function;
  @Input() borrowDetails: Borrowing;
  constructor(private swalService: SwalService, private bookService: BookService) {}

  ngOnInit() {}

  /**
   * Initiate a book transfer
   */
  transfer = () => {
    this.swalService.displayConfirmation(
      'Confirm Transfer',
      'You are about transfer your book would you like to proceed',
      async data => {
        if (data) {
          await this.bookService.placeABookTransfer(this.borrowDetails);
          this.moveHeader();
          this.subscribeToTransferReq();
        }
      }
    );
  };
}
