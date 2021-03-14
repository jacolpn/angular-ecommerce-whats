import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-square-white',
  templateUrl: './square-white.component.html',
  styleUrls: ['./square-white.component.css']
})
export class SquareWhiteComponent implements OnInit {  
  @Input() space: boolean = true;
  
  constructor() { }

  ngOnInit(): void { }
}
