import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() primary: boolean = false;
  @Input() fontBlack: boolean = false;
  @Input() backgroundColor?: string;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label = 'Story-Button';
  @Input() icon: string;

  @Output() onClick = new EventEmitter<Event>();
  
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
