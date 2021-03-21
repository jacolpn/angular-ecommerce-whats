import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { OrderComponent } from './order.component';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/stories/components/components.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class OrderModule { }
