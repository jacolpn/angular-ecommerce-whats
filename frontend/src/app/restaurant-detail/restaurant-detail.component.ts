import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { VILLE_API } from './../app.api';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    // this.getDB();
    this.mockDB();
  }

  mockDB() {
    this.restaurant = {
      "id": "bread-bakery",
      "name": "Bread & Bakery",
      "category": "Bakery",
      "deliveryEstimate": "25m",
      "rating": 4.9,
      "imagePath": "assets/img/restaurants/breadbakery.png",
      "about": "A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.",
      "hours": "Funciona de segunda à sexta, de 8h às 23h"
    }
  }

  getDB() {
    this.http
      .get<Restaurant>(`${VILLE_API}/restaurants/bread-bakery`)
      .subscribe( restaurant => this.restaurant = restaurant );
  }
}
