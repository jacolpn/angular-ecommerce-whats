import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'storybook-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() placeHolder = 'Story-Input';
  
  constructor() { }

  ngOnInit(): void { }
}
