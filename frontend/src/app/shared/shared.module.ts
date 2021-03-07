import { NotificationService } from './messages/notification.service';
import { OrderService } from './../order/order.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { InputComponent } from './input/input.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RadioComponent } from './radio/radio.component';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    SnackbarComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
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
