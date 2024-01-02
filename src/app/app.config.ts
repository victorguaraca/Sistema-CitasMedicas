import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AngularSvgIconModule, provideAngularSvgIcon } from 'angular-svg-icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),HttpClientModule]
};
