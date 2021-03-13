import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input() user: unknown = null;
  @Output() onLogin = new EventEmitter<Event>();
  @Output() onLogout = new EventEmitter<Event>();
  @Output() onCreateAccount = new EventEmitter<Event>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
