import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-storybook-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() primary: boolean;
  @Input() disabled: boolean;
  @Input() fontBlack: boolean;
  @Input() backgroundColor?: string;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label = 'Story-Button';
  @Input() icon: string;

  @Output() clicked = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void { }

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    if (this.fontBlack) {
      return ['storybook-button', `storybook-button--${this.size}`, 'font-black'];
    }

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
