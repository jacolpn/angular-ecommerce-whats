import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'storybook-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() placeHolder = 'Story-Input';
  @Input() errorMessage: string;
  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() class: string;

  constructor() { }

  ngOnInit(): void { }

  public mask = {
    guide: false,
    showMask: false,
    mask: ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  };
}
