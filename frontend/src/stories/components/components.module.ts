import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { PageComponent } from './page/page.component';
import { SquareWhiteComponent } from './square-white/square-white.component';

@NgModule({
  declarations: [
    ButtonComponent,
    PageComponent,
    SquareWhiteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    PageComponent,
    SquareWhiteComponent
  ]
})
export class ComponentsModule {
}
