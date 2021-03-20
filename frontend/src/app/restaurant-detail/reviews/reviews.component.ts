import { BehaviorSubject, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { VILLE_API } from './../../app.api';
import { Restaurant } from '../restaurant.model';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  // reviews: Observable<any>;
  reviews: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let db = false;

    if (db) {
      this.getDB();
    } else {
      this.mockDB();
    }
  }

  getDB() {
    this.reviews = this.http
      .get<Restaurant>(`${VILLE_API}/restaurants/bread-bakery/reviews`)
      .pipe(tap(console.log));
  }

  mockDB() {
    this.reviews = [
      {
        "name": "Julia",
        "date": "2017-01-23T18:25:43",
        "rating": 4.5,
        "comments": "Tudo muito bom, entrega no tempo certo",
        "restaurantId": "bread-bakery"
      },
      {
        "name": "Aline",
        "date": "2016-12-12T18:25:43",
        "rating": 3,
        "comments": "NÃO recomendo. O recheio é só um creme, não tem camarão e nem carne",
        "restaurantId": "bread-bakery"
      },
      {
        "name": "Jackson Luís Peres das Neves",
        "date": "2016-12-12T18:25:43",
        "rating": 2,
        "comments": "Não foi muito agradável ao nosso paladar, e eu e meu esposo no outro dia passamos super mal. Pode até ter sido outra coisa, mas...",
        "restaurantId": "bread-bakery"
      },
      {
        "name": "Renata",
        "date": "2016-12-12T18:25:43",
        "rating": 5,
        "comments": "Nunca deixou na mão, comida sempre deliciosa.",
        "restaurantId": "bread-bakery"
      }
    ];
  }
}
