import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { VILLE_API } from 'src/app/app.api';
import { Restaurant } from '../restaurant.model';
import * as data from '../../../../db.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // menu: Observable<any>;
   menu: any;
   dbJson = data.menu;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let db = false;

    if (db) {
      this.getDB();
    } else {
      this.menu = this.dbJson;
    }
  }

  getDB() {
    this.menu = this.http
      .get<Restaurant>(`${VILLE_API}/restaurants/jack-daniels/menu`);
  }
}
