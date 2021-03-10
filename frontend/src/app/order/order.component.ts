import { CartItem } from './../restaurant-detail/shopping-cart/shopping-cart.model';
import { OrderService } from './order.service';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  numberPattern = /^[0-9]*$/;
  orderForm: FormGroup;
  delivery = 3.99;
  orderId: string;
  whats = null;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de débito', value: 'DEB' },
    { label: 'Vale refeição', value: 'VR' }
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
      address: this.formBuilder.control(
        'Rua Xanxerê',
        [Validators.required, Validators.minLength(5)]
      ),
      number: this.formBuilder.control(
        '650',
        [Validators.required, Validators.pattern(this.numberPattern)]
      ),
      // optionalAddress: this.formBuilder.control(''),
      optionalAddress: new FormControl('', { updateOn: 'blur' }),
      paymentOption: this.formBuilder.control('MON', [Validators.required])
    }, { validator: OrderComponent.equalsTo });
  }

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');

    if (!email || !emailConfirmation) {
      return undefined;
    }

    if (email.value !== emailConfirmation.value) {
      return { emailsNotMatch: true };
    }

    return undefined;
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
    let bd = false;

    if (bd == false) {
    let itens = [];
    
    order.orderItems = this
      .cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id, item.menuItem.name));
    
    itens = order.orderItems.map(item => (` (${item.quantity}) ${item.name}`));

      this.whats =
        `https://web.whatsapp.com/send/?phone=+5547988458640&text=` +
        `Olá VilleMeat, gostaria de${itens}` +
        `. Entregar no endereço: ${order.address}, Nº ${order.number}. (Ass. Jackson)`;

      window.location.href = this.whats;
    } else {
      order.orderItems = this
        .cartItems()
        .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id, item.menuItem.name));
      
      this.orderService
        .checkOrder(order)
        .pipe(tap((orderId: string) => {
          this.orderId = orderId;
        })).subscribe((orderId: string) => {
          let itens = [];

          itens = order.orderItems.map(item => (` (${item.quantity}) ${item.name}`));
        
          this.whats =
            `https://web.whatsapp.com/send/?phone=+554796974076&text=` +
            `Olá VilleMeat, gostaria de${itens}` +
            `. Entregar no endereço: ${order.address}, Nº ${order.number}. (Ass. Jackson)`;
        
          window.location.href = this.whats;
          this.orderService.clear();
      });
    }
  }
}
