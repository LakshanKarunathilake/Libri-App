import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animated-text',
  templateUrl: './animated-text.component.html',
  styleUrls: ['./animated-text.component.scss']
})
export class AnimatedTextComponent implements OnInit {
  constructor() {}
  @Input() text = 'pending';
  ngOnInit() {}
}
