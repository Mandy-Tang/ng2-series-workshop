import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {AuthService} from '../../services';

@Component({
  selector: 'app-bar',
  template: require('./app-bar.html'),
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  styles: [require('./app-bar.css')]
})

export class AppBar {
  constructor (private authService: AuthService) {}
  signOut(): void {
    this.authService.signOut();
  }
}
