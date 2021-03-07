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
  
  menu: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDB();
  }

  getDB() {
    this.menu = this.http
      .get<Restaurant>(`${VILLE_API}/restaurants/bread-bakery/menu`)
  }
}
