import { NotificationService } from './messages/notification.service';
import { OrderService } from './../order/order.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    InputComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    SnackbarComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [
        ShoppingCartService,
        OrderService,
        NotificationService
      ]
    };
  }
}
