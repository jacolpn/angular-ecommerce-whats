import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { RadioOption } from './radio-option.model';

@Component({
  selector: 'storybook-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true
    }
  ]
})
export class RadioButtonComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[];

  value: any;
  label: any;
  cents: number;
  onChange: any;

  constructor() { }

  ngOnInit(): void { }

  setValue(value: any, label: any, cents?: any) {
    this.label = label;
    this.onChange(this.label);
    
    if (label == 'Dinheiro' && cents != undefined && cents != 'Nenhum') {
      this.value = `${value} (_troco para R$: ${this.cents},00_)`;
      this.onChange(this.value);  
    } else {
      this.value = value;
      this.onChange(this.value);
    }
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }
}
