import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

import { MenuItem } from './menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
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
export class MenuItemComponent implements OnInit {

  menuItemState = 'ready';

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.menuItem == null) {
      console.log('jack');
      this.menuItem = {
        "id": "cup-cake",
        "imagePath": "assets/img/foods/cupcake.png",
        "name": "Cup Cake",
        "description": "Cup Cake recheado de Doce de Leite",
        "price": 8.7
      }}
  }

  emitAddEvent() {
    this.add.emit(this.menuItem);
    
  }
}
