import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() primary = false;
  @Input() backgroundColor?: string;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label = 'Button';
  @Output() onClick = new EventEmitter<Event>();
  
  constructor() { }

  ngOnInit(): void { }

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
