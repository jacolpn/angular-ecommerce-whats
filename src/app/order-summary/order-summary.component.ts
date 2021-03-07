import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {

  rated: boolean;
  whats: string;

  constructor() { }

  ngOnInit() {
  }
  
  rate() {
    this.rated = true;
  }
  
  redirectWhats() {
    this.whats = "";

    window.open(this.whats, '_blank');
  }
}
