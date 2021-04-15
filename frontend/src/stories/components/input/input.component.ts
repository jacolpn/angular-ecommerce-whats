import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-storybook-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() placeHolder: string;
  @Input() errorMessage: string;
  @Input() type: string;
  @Input() label: string;
  @Input() class: string;
  @Input() value: any;

  constructor() { }

  ngOnInit(): void { }

  /*
    public mask = {
      guide: false,
      showMask: false,
      mask: ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    };
  */
}
