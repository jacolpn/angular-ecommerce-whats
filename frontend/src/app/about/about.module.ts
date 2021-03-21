import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/stories/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const ROUTES: Routes = [
  { path: '', component: AboutComponent }
];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class AboutModule { }
