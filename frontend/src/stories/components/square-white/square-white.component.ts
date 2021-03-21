import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'storybook-square-white',
  templateUrl: './square-white.component.html',
  styleUrls: ['./square-white.component.css']
})
export class SquareWhiteComponent implements OnInit {  
  @Input() storyBookView: boolean = true;
  @Input() classWrapper = false;
  @Input() classContent: string = 'content';
  
  constructor() { }

  ngOnInit(): void { }

  public get classes(): string[] {
    const mode = this.classWrapper ? 'wrapper-height' : 'wrapper';

    return ['wrapper', mode];
  }
}
