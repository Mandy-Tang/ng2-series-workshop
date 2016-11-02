import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { AuthService } from './shared/services';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthService],
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent }
    ]
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
