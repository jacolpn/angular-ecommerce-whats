import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../stories/components/components.module';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { OrderComponent } from './order.component';
import { NumberMaskModule } from '../shared/directives/number-mask/number-mask.module';

const ROUTES: Routes = [
  { path: '', component: OrderComponent }
];

@NgModule({
  declarations: [
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ComponentsModule,
    NumberMaskModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class OrderModule { }
