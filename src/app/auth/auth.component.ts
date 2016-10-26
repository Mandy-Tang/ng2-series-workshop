import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services';
import {Router} from '@angular/router';

const linkTexts = {
  signIn: 'Don\'t have an account?',
  signUp: 'Already have an account?'
}

@Component({
  selector: 'auth',
  template: require('./auth.component.html'),
  styles: [require('./auth.component.css')]
})

export class AuthCompoment implements OnInit {
  user: {email: string, password: string};
  mode: 'signIn' | 'signUp';
  linkText: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = {email: '', password: ''};
    this.mode = 'signIn';
    this.linkText = linkTexts.signIn;
  }

  changeMode(): void {
    if (this.mode === 'signIn') {
      this.mode = 'signUp';
      this.linkText = linkTexts.signUp;
    } else {
      this.mode = 'signIn';
      this.linkText = linkTexts.signIn;
    }
  }

  authenticate(): void {
    this.authService.ahthenticate(this.mode, this.user)
      .subscribe(() => this.router.navigate(['/']))
  }
}
