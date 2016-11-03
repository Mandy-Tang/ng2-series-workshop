import { Component } from '@angular/core';
// import {ROUTER_DIRECTIVES} from '@angular/router';
import { AuthService } from '../../services';

@Component({
  selector: 'app-bar',
  template: require('./app-bar.component.html'),
  styles: [require('./app-bar.component.css')]
})

export class AppBarComponent {
  constructor (private authService: AuthService) {}
  signOut(): void {
    this.authService.signOut();
  }
}
