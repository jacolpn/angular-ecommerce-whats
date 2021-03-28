import { ROUTES } from './app-route';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import locatePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { registerLocaleData } from '@angular/common';
import { ComponentsModule } from 'src/stories/components/components.module';
import { FooterComponent } from './footer/footer.component';
import { CardItemComponent } from './restaurant-detail/menu/card-item/card-item.component';

registerLocaleData(locatePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    FooterComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule.forRoot(),
    RouterModule.forRoot(
      ROUTES,
      { preloadingStrategy: PreloadAllModules }
    )
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
