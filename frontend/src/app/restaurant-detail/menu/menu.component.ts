import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { VILLE_API } from 'src/app/app.api';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  // menu: Observable<any>;
  menu: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let db = false;

    if (db == false) {
      this.mockDB();
    } else {
      this.getDB();
    }
  }

  getDB() {
    this.menu = this.http
      .get<Restaurant>(`${VILLE_API}/restaurants/bread-bakery/menu`)
  }

  mockDB() {
    this.menu = [
      {
        "id": "cup-cake",
        "imagePath": "assets/img/foods/cupcake.png",
        "name": "Cup Cake",
        "description": "Cup Cake recheado de Doce de Leite",
        "price": 8.7,
        "restaurantId": "bread-bakery"
      },
      {
        "id": "donut",
        "imagePath": "assets/img/foods/donut.png",
        "name": "Donut",
        "description": "Coberto com chantilly",
        "price": 2.5,
        "restaurantId": "bread-bakery"
      },
      {
        "id": "bread",
        "imagePath": "assets/img/foods/bread.png",
        "name": "Pão Artesanal Italiano",
        "description": "Pão artesanal com queijos italianos",
        "price": 15.9,
        "restaurantId": "bread-bakery"
      }
    ];
  }
}
