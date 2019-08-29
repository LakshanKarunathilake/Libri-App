import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, Input } from '@angular/core';
import { Borrowing } from 'src/app/models/Borrowings';
import { SwalService } from 'src/app/services/swal/swal.service';

@Component({
  selector: 'item-transfer',
  templateUrl: './item-transfer.component.html',
  styleUrls: ['./item-transfer.component.scss']
})
export class ItemTransferComponent implements OnInit {
  @Input() moveHeader: Function;
  @Input() borrowDetails: Borrowing;
  constructor(private swalService: SwalService, private afs: AngularFirestore) {}

  ngOnInit() {}

  /**
   * Initiate a book transfer
   */
  transfer = () => {
    this.swalService.displayConfirmation(
      'Confirm Transfer',
      'You are about transfer your book would you like to proceed',
      data => {
        if (data) {
          this.moveHeader();
        }
      }
    );
  };
}
