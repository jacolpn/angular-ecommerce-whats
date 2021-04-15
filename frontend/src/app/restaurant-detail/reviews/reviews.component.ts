import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { VILLE_API, DB } from './../../app.api';
import { Restaurant } from '../restaurant.model';
import * as data from '../../../../db.json';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: any;
  dbJson = data.reviews;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (DB) {
      this.getDB();
    } else {
      this.reviews = this.dbJson;
    }
  }

  getDB(): void {
    this.http
      .get<Restaurant>(`${VILLE_API}/restaurants/jack-daniels/reviews`)
      .subscribe({
        next: reviews => this.reviews = reviews,
        error: error => this.reviews = this.dbJson
      });
  }
}
