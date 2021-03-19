import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { PageComponent } from './page/page.component';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ROUTES } from 'src/app/app-route';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SquareWhiteComponent } from './square-white/square-white.component';

@NgModule({
  declarations: [
    ButtonComponent,
    PageComponent,
    SquareWhiteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      ROUTES,
      { preloadingStrategy: PreloadAllModules }
    )
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    PageComponent,
    SquareWhiteComponent
  ]
})
export class ComponentsModule { }
