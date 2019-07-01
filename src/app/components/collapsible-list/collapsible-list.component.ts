import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapsible-list',
  templateUrl: './collapsible-list.component.html',
  styleUrls: ['./collapsible-list.component.scss']
})
export class CollapsibleListComponent implements OnInit {
  constructor() {}
  @Input() title;

  ngOnInit() {}
}
