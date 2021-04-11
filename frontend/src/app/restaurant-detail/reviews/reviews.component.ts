import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { VILLE_API } from './../../app.api';
import { Restaurant } from '../restaurant.model';
import * as data from '../../../../db.json';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  // reviews: Observable<any>;
  reviews: any;
  dbJson = data.reviews;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let db = false;

    if (db) {
      this.getDB();
    } else {
      this.reviews = this.dbJson;
    }
  }

  getDB() {
    this.reviews = this.http
      .get<Restaurant>(`${VILLE_API}/restaurants/jack-daniels/reviews`)
      .pipe(tap(console.log));
  }
}
