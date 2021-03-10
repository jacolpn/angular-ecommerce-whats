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
      "id": "jack-daniels",
      "name": "Jack Daniel's",
      "category": "whisky",
      "deliveryEstimate": "25m",
      "rating": 9.9,
      "imagePath": "assets/img/restaurants/jack-daniels.jpg",
      "about": "Mais de 150 anos se passaram desde que Nearest e Jack começaram a fazer whiskey juntos e, até hoje, sempre houve um membro da família Green trabalhando na Destilaria Jack Daniel.",
      "hours": "Funciona de segunda à segunda, de 00h às 23h"
    }
  }

  getDB() {
    this.http
      .get<Restaurant>(`${VILLE_API}/restaurants/bread-bakery`)
      .subscribe( restaurant => this.restaurant = restaurant );
  }
}
