import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-square-white',
  templateUrl: './square-white.component.html',
  styleUrls: ['./square-white.component.css']
})
export class SquareWhiteComponent implements OnInit {  
  @Input() space: boolean = true;
  @Input() height = false;
  
  constructor() { }

  ngOnInit(): void { }

  public get classes(): string[] {
    const mode = this.height ? 'wrapper-height' : 'wrapper';

    return [mode];
  }
}
