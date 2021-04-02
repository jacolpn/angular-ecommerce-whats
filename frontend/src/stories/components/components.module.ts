import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { SquareWhiteComponent } from './square-white/square-white.component';
import { InputComponent } from './input/input.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RatingComponent } from './rating/rating.component';
import { ShoppingCartService } from 'src/app/restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderService } from 'src/app/order/order.service';
import { NotificationService } from './snackbar/notification.service';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { PhoneMaskDirective } from './phone-mask.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    SquareWhiteComponent,
    InputComponent,
    RadioButtonComponent,
    RatingComponent,
    PhoneMaskDirective,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    SquareWhiteComponent,
    InputComponent,
    RadioButtonComponent,
    RatingComponent,
    PhoneMaskDirective,
    SnackbarComponent
  ]
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: ComponentsModule,
      providers: [
        ShoppingCartService,
        OrderService,
        NotificationService
      ]
    };
  }
}

