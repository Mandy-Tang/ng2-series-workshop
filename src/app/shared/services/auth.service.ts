import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService implements CanActivate {
  JWT_KEY: string = 'retain_token';
  user: any;
  constructor(private router: Router, private apiService: ApiService) {
    const token = localStorage.getItem(this.JWT_KEY);
    if (token) {
      this.setJWT(token);
    }
  }

  setJWT(jwt: string): void {
    localStorage.setItem(this.JWT_KEY, jwt);
    this.apiService.setHeaders({'Authorization': `Bearer ${jwt}`});
  }

  ahthenticate(path: string, creds: any): Observable<any> {
    return this.apiService.post(`/${path}`, creds)
      .do(res => this.setJWT(res.token))
      .do(res => this.user = res.data)
      .map(res => res.data)
  }

  signOut(): void {
    localStorage.removeItem(this.JWT_KEY);
    this.user = null;
    this.router.navigate(['/auth']);
  }

  isAuthrised(): boolean {
    return !!localStorage.getItem(this.JWT_KEY);
  }

  canActivate(): boolean {
    const isAuth = this.isAuthrised();

    if (!isAuth) {
      this.router.navigate(['/auth']);
    }

    return isAuth;
  }

}
