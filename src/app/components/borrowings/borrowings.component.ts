import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-borrowings',
  templateUrl: './borrowings.component.html',
  styleUrls: ['./borrowings.component.scss'],
})
export class BorrowingsComponent implements OnInit {

  constructor(private userService: UserService) {}

  ngOnInit() {}

}
