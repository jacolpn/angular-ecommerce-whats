import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { VILLE_API } from './../app.api';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let db = false;

    if (db) {
      this.getDB();
    } else {
      this.mockDB();
    }
  }

  mockDB() {
    this.restaurant = {
      "id": "jack-daniels",
      "name": "Jack Daniel's",
      "category": "Whisky",
      "deliveryEstimate": "25m",
      "rating": 9.9,
      "imagePath": "assets/img/restaurants/jack-daniels.png",
      "about": "Mais de 150 anos se passaram desde que Nearest e Jack começaram a fazer whiskey juntos e, até hoje, sempre houve um membro da família Green trabalhando na Destilaria Jack Daniel.",
      "hours": "Funciona de segunda à segunda, de 00h às 23h"
    }
  }

  getDB() {
    this.http
      .get<Restaurant>(`${VILLE_API}/restaurants/jack-daniels`)
      .subscribe( restaurant => this.restaurant = restaurant );
  }
}
