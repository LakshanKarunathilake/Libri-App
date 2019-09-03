import { Component, OnInit, Input } from '@angular/core';
import { Borrowing } from 'src/app/models/Borrowings';
import { SwalService } from 'src/app/services/swal/swal.service';
import { UserService } from 'src/app/services/user/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'item-transfer',
  templateUrl: './item-transfer.component.html',
  styleUrls: ['./item-transfer.component.scss']
})
export class ItemTransferComponent implements OnInit {
  @Input() moveHeader: Function;
  @Input() borrowDetails: Borrowing;
  constructor(
    private swalService: SwalService,
    private afs: AngularFirestore,
    private userService: UserService,
    private bookService: BookService
  ) {}

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
          await this.creatingATransferRecord();
          this.moveHeader();
        }
      }
    );
  };

  creatingATransferRecord = async () => {
    const { uid } = this.userService.getCurrentUser();
    console.log('uid', uid);
    await this.afs
      .collection('users')
      .doc(uid)
      .collection('transfers')
      .add(this.borrowDetails);
  };
}
