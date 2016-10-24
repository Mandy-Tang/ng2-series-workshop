import {Component} from '@angular/core';
import {Home} from './home';
import {AppBar} from './shared/components';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'app',
  template: require('./app.html'),
  directives: [...ROUTER_DIRECTIVES, AppBar]
})

export class App{}
