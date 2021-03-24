import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { Order, OrderItem } from './order.model';
import { OrderService } from './order.service';
import { CartItem } from './../restaurant-detail/shopping-cart/shopping-cart.model';
import { RadioOption } from '../../stories/components/radio-button/radio-option.model';

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
  whatsApp = null;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'Dinheiro' },
    { label: 'Cartão de débito', value: 'Cartão Débito' },
    { label: 'Vale refeição', value: 'Vale Refeição' }
  ];

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control(
        'Jackson Neves',
        [Validators.required, Validators.minLength(5)]
      ),
      phone: this.formBuilder.control(
        '47999342827',
        [Validators.required, Validators.pattern(this.numberPattern)]
      ),
      address: this.formBuilder.control(
        'Rua Xanxerê',
        [Validators.required, Validators.minLength(5)]
      ),
      number: this.formBuilder.control(
        '650',
        [Validators.required, Validators.pattern(this.numberPattern)]
      ),
      optionalAddress: new FormControl('', { updateOn: 'blur' }),
      paymentOption: this.formBuilder.control('', [Validators.required])
    });
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  removeItem(item: CartItem) {
    this.orderService.removeItem(item);
  }

  isOrderCompleted(): boolean {
    return this.orderId !== undefined;
  }

  checkOrder(order: Order) {
    let db = false;
    let itens = [];
    
    order.orderItems = this
      .cartItems()
      .map((item: CartItem) => new OrderItem(
        item.quantity,
        item.menuItem.id,
        item.menuItem.name
        ));
        
    itens = order.orderItems.map(item => (` (${item.quantity}) ${item.name}`));
        
    if (db) {
      this.orderService
        .checkOrder(order)
        .pipe(tap((orderId: string) => {
          this.orderId = orderId;
      })).subscribe((orderId: string) => {
        this.orderService.clear();
      });
    }

    this.whatsApp =
      `https://wa.me/5547988458640/?text=` +
      `Olá VilleMeat, gostaria de${itens}. ` +
      `Pagamento: ${order.paymentOption}. ` +
      `Entregar no endereço: ${order.address}, Nº ${order.number}. ` +
      `(Ass. ${order.name}, ${order.phone})`;

    // window.location.href = this.whatsApp; 
    this.router.navigate(['/order-summary']);
    window.open(this.whatsApp, '_blank');
  }
}
