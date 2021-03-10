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
        "id": "jack-daniels-black",
        "imagePath": "assets/img/foods/jack-daniels-black.jpg",
        "name": "Jack Daniels",
        "description": "Diferencia-se pelo seu cuidadoso processo de elaboração, destilação e envelhecimento.",
        "price": 136.99,
        "restaurantId": "bread-bakery"
      },
      {
        "id": "jack-daniels-fire",
        "imagePath": "assets/img/foods/jack-daniels-fire.jpg",
        "name": "Jack Daniels Fire",
        "description": " Jack Daniels Fire destaca-se pela mistura natural de licor de canela picante com o clássico whiskey Americano Jack Daniels.",
        "price": 149.90,
        "restaurantId": "bread-bakery"
      },
      {
        "id": "jack-daniels-honey",
        "imagePath": "assets/img/foods/jack-daniels-honey.jpg",
        "name": "Jack Daniels Honey",
        "description": "Suavidade do Jack Daniel levemente temperada com mel.",
        "price": 136.90,
        "restaurantId": "bread-bakery"
      },
      {
        "id": "jack-daniels-apple",
        "imagePath": "assets/img/foods/jack-daniels-apple.jpg",
        "name": "Jack Daniels Apple",
        "description": "A nova bebida é a mistura do clássico Jack Daniels Tennessee Whiskey com licor de maçã.",
        "price": 134.90,
        "restaurantId": "bread-bakery"
      }
    ];
  }
}
