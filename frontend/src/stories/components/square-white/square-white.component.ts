import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-storybook-square-white',
  templateUrl: './square-white.component.html',
  styleUrls: ['./square-white.component.css']
})
export class SquareWhiteComponent implements OnInit {
  @Input() storyBookView: boolean;
  @Input() classWrapper = false;
  @Input() classContent: string;

  constructor() { }

  ngOnInit(): void {
    this.storyBookView = true;
  }

  public get classes(): string[] {
    const mode = this.classWrapper ? 'wrapper-height' : 'wrapper';

    return ['wrapper', mode];
  }
}
