import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

import { MenuItem } from '../menu-item.model';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-card-item',
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
  quantity: number;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.findQuantity(this.menuItem);
   }

  emitAddEvent(): void {
    this.add.emit(this.menuItem);

    this.shoppingCartService.items.find(item => {
      if (item.menuItem.id === this.menuItem.id) {
        return this.quantity = item.quantity;
      }

      return;
    });
  }

  listIdCart(): any {
    return this.shoppingCartService.items.map(item => {
      return item.menuItem.id;
    });
  }

  findIdCart(): any {
    return this.listIdCart().find(itemId => {
      if (itemId === this.menuItem.id) {
        return true;
      }
    });
  }

  emitIncreaseQty(itemCart: MenuItem): void {
    this.shoppingCartService.increaseQty(
      this.shoppingCartService.items.find(item => {
        if (item.menuItem.id === itemCart.id) {
          return item.quantity;
        }
      })
    );

    this.findQuantity(itemCart);
  }

  emitDecreaseQty(itemCart: MenuItem): void {
    this.shoppingCartService.decreaseQty(
      this.shoppingCartService.items.find(item => {
        if (item.menuItem.id === itemCart.id) {
          return item.quantity;
        }
      })
    );

    this.findQuantity(itemCart);
  }

  findQuantity(itemCart: MenuItem): void {
    this.shoppingCartService.items.find(item => {
      if (item.menuItem.id === itemCart.id) {
        return this.quantity = item.quantity;
      }
    });
  }
}
