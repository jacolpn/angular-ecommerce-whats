import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { SquareWhiteComponent } from './square-white/square-white.component';
import { InputComponent } from './input/input.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SquareWhiteComponent,
    InputComponent,
    RadioButtonComponent
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
    RadioButtonComponent
  ]
})
export class ComponentsModule { }
