import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { VILLE_API, DB } from 'src/app/app.api';
import { Restaurant } from '../restaurant.model';
import * as data from '../../../../db.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   menu: any;
   dbJson = data.menu;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (DB) {
      this.getDB();
    } else {
      this.menu = this.dbJson;
    }
  }

  getDB(): void {
    this.http
      .get<Restaurant>(`${VILLE_API}/restaurants/jack-daniels/menu`)
      .subscribe({
        next: menu => this.menu = menu,
        error: error => this.menu = this.dbJson
      });
  }
}
