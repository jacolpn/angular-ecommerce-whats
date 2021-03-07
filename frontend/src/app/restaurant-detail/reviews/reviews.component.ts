import { BehaviorSubject, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { VILLE_API } from './../../app.api';
import { Restaurant } from '../restaurant.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDB();
  }

  getDB() {
    this.reviews = this.http
      .get<Restaurant>(`${VILLE_API}/restaurants/bread-bakery/reviews`)
      .pipe(tap(console.log));
  }

  mockDB() { }
}
