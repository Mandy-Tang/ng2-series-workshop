import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'app-bar',
  template: require('./app-bar.html'),
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  styles: [require('./app-bar.css')]
})

export class AppBar{}
