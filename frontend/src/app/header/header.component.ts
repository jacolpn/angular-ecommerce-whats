import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() titleHeader = 'Whisky Ville';
  @Output() about = new EventEmitter<Event>();

  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigateAbout(): void {
    this.router.navigate(['/about']);
  }
}
