import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  constructor(private modalController: ModalController) {}
  @Input() book;
  ngOnInit() {}

  closeModal = () => {
    this.modalController.dismiss();
  };
}
