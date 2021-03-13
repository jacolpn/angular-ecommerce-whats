import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    PageComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: ComponentsModule,
      providers: []
    };
  }
}
