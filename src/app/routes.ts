import {RouterConfig} from '@angular/router';
import {Home} from './home';
import {About} from './about';
import {AuthCompoment} from './auth';
import {MainComponent} from './main';

export const router: RouterConfig = [
  {path: '', component: Home},
  {path: 'about', component: About},
  {path: 'auth', component: AuthCompoment},
  {path: '**', redirectTo: ''}
];
