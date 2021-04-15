import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { VILLE_API } from './../app.api';
import { Order } from './order.model';
import { CartItem } from './../restaurant-detail/shopping-cart/shopping-cart.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';

@Injectable()
export class OrderService {

  constructor(
    private cartService: ShoppingCartService,
    private http: HttpClient
  ) { }

  itemsValue(): number {
    return this.cartService.total();
  }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQty(item: CartItem): void {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem): void {
    this.cartService.decreaseQty(item);
  }

  removeItem(item: CartItem): void {
    this.cartService.removeItem(item);
  }

  clear(): void {
    this.cartService.clear();
  }

  // checkOrder(order: Order): Observable<Order> {
  checkOrder(order: Order): Observable<string> {
    return this.http
      .post<Order>(`${VILLE_API}/orders`, order)
      .pipe(map(orders => orders.id));
  }
}
