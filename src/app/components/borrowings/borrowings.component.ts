import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Borrowing } from 'src/app/models/Borrowings';

@Component({
  selector: 'app-borrowings',
  templateUrl: './borrowings.component.html',
  styleUrls: ['./borrowings.component.scss'],
})
export class BorrowingsComponent implements OnInit {
  borrowings: Borrowing[];
  overdues: Borrowing[];

  constructor(private userService: UserService) {}

  ngOnInit() {}

}
