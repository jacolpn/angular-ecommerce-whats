import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[numberMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumberMaskDirective, 
    multi: true
  }]
})
export class NumberMaskDirective implements ControlValueAccessor {
  @Input() numberMask: string;
  @Output() updateNumberMask = new EventEmitter();

  onTouched: any;
  onChange: any;

  constructor() { }

  writeValue(value: any): void { }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    var valor = $event.target.value.replace(/\D/g, '');
    var pad = this.numberMask.replace(/\D/g, '').replace(/9/g, '_');
    var valorMask = valor + pad.substring(0, pad.length - valor.length);
    var valorMaskPos = 0;

    if ($event.keyCode === 'Tab') {
      if ($event.target.value.length === this.numberMask.length) {
        return;
      }
    }

    if (valor.length <= pad.length) {
      this.onChange(valor);
    }

    // retorna caso pressionado backspace
    if ($event.keyCode === 8) {
      if ($event.target.value.length == 7) {
        this.onChange(valor);
        return;
      } 

      this.onChange($event.target.value);
      return;
    }

    valor = '';

    for (var i = 0; i < this.numberMask.length; i++) {
      if (isNaN(parseInt(this.numberMask.charAt(i)))) {
        valor += this.numberMask.charAt(i);
      } else {
        valor += valorMask[valorMaskPos++];
      }
    }

    if (valor.indexOf('_') > -1) {
      valor = valor.substr(0, valor.indexOf('_'));
    }

    $event.target.value = valor;
    this.updateNumberMask.emit($event.target.value);
  }

  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    if ($event.target.value.length === this.numberMask.length) {
      return;
    }

    this.onChange('');
    $event.target.value = '';
    this.updateNumberMask.emit($event.target.value);
  }
}
