import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'color-picker',
  template: require('./color-picker.component.html'),
  styles: [require('./color-picker.component.css')]
})

export class ColorPickerComponent {
  @Output()
  onPickColor = new EventEmitter();
  isFocus:boolean = false;
  colors = [
    'rgb(255, 138, 128)',
    'rgb(255, 209, 128)',
    'rgb(255, 255, 141)',
    'rgb(207, 216, 220)',
    'rgb(128, 216, 255)',
    'rgb(167, 255, 235)',
    'rgb(204, 255, 144)'
  ];
  pickColor(color) {
    this.isFocus = false;
    this.onPickColor.emit(color);
  }
}
