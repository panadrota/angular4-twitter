import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TwitterComponent } from './twitter.component';

const routes: Route[] = [
  {
    path: '',
    component: TwitterComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
