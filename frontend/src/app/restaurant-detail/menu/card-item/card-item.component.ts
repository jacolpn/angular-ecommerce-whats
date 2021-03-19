import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

import { MenuItem } from '../menu-item.model';

@Component({
  selector: 'storybook-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translateY(-20px)'}),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class CardItemComponent implements OnInit {
  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter();
  
  menuItemState = 'ready';

  constructor() { }

  ngOnInit(): void { }

  emitAddEvent() {
    this.add.emit(this.menuItem); 
  }
}
