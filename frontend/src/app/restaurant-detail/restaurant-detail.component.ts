import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { VILLE_API, DB } from './../app.api';
import { Restaurant } from './restaurant.model';
import * as data from '../../../db.json';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;
  dbJson = data.restaurants[0];
  urlToJson = 'assets/restaurant.json';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.getJsonOffline();
    if (DB) {
      this.getDB();
    } else {
      this.restaurant = this.dbJson;
    }
  }

  getDB(): void {
    this.http
      .get<Restaurant>(`${VILLE_API}/restaurants/jack-daniels`)
      .subscribe({
        next: restaurant => this.restaurant = restaurant,
        error: error => this.restaurant = this.dbJson
      });
  }

  getJsonOffline(): void {
    this.http
      .get<Restaurant>(this.urlToJson)
      .subscribe({
        next: menu => this.restaurant = menu,
        error: () => this.restaurant = this.dbJson
      });
  }
}
