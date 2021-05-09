import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { Order, OrderItem } from './order.model';
import { OrderService } from './order.service';
import { CartItem } from './../restaurant-detail/shopping-cart/shopping-cart.model';
import { DB } from 'src/app/app.api';
import * as data from '../../../db.json';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  numberPattern = /^[0-9]*$/;
  orderForm: FormGroup;
  delivery = 3.99;
  orderId: string;
  dbJson = data.paymentOptions;
  urlToJson = 'assets/order.json';

  name = '';
  phone = '';
  address = '';
  number = '';
  optionalAddress = '';

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // Direcionar a pagina ao topo quando iniciada.
    window.scrollTo(0, 0);

    this.showLocalStorageValue();

    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control(
        '',
        [Validators.required, Validators.minLength(5)]
      ),
      phone: this.formBuilder.control(
        '',
        [Validators.required]
      ),
      address: this.formBuilder.control(
        '',
        [Validators.required]
      ),
      number: this.formBuilder.control(
        '',
        [Validators.required, Validators.pattern(this.numberPattern)]
      ),
      optionalAddress: new FormControl(''),  // { updateOn: 'blur' }
      paymentOption: this.formBuilder.control('', [Validators.required])
    });
  }

  applyError(controlName): any {
    if (this.orderForm.get(controlName).valid && this.orderForm.get(controlName).dirty) {
      return 'has-feedback';
    }

    if (this.orderForm.get(controlName).invalid && this.orderForm.get(controlName).dirty) {
      return 'has-error';
    }
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem): void {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem): void {
    this.orderService.decreaseQty(item);
  }

  removeItem(item: CartItem): void {
    this.orderService.removeItem(item);
  }

  isOrderCompleted(): boolean {
    return this.orderId !== undefined;
  }

  checkOrder(order: Order): void {
    let itens = [];

    order.orderItems = this
      .cartItems()
      .map((item: CartItem) => new OrderItem(
        item.quantity,
        item.menuItem.id,
        item.menuItem.name
        ));

    itens = order.orderItems.map(item => (` (${item.quantity}) ${item.name}`));

    if (DB) {
      this.orderService
        .checkOrder(order)
        .pipe(tap((orderId: string) => this.orderId = orderId))
        .subscribe(() => this.orderService.clear());
    }

    const phone = '5547988458640';
    let whats = `Olá Whisky Ville, gostaria de realizar o seguinte pedido:\n\n` +
                `*Produtos:* ${itens}.\n` +
                `*Pagamento:* ${order.paymentOption}.\n` +
                `*Entregar no endereço:* ${order.address}, Nº ${order.num} - ${order.optionalAddress}.\n\n` +
                `(Ass. ${order.name}, ${order.phone})`;

    whats = window.encodeURIComponent(whats);
    window.open('https://api.whatsapp.com/send?phone=' + phone + '&text=' + whats, '_blank');
  }

  saveLocalStorage(key, value): void {
    localStorage.setItem(key, value);
  }

  showLocalStorageValue(): void {
    this.name = localStorage.getItem('name');
    this.phone = localStorage.getItem('phone');
    this.address = localStorage.getItem('address');
    this.number = localStorage.getItem('number');
    this.optionalAddress = localStorage.getItem('optionalAddress');
  }

  removeRegisterLocalStorage(key): void {
    return localStorage.removeItem(key);
  }

  updatePhone(evento) {
    this.phone = evento;
  }
}
