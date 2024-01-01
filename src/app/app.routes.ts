import { Routes } from '@angular/router';
import { SidebarComponent } from './Modules/layouts/components/sidebar/sidebar.component';
import { LayoutsComponent } from './Modules/layouts/layouts.component';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { AuthComponent } from './Modules/auth/auth.component';

export const routes: Routes = [
 //{path: '', loadComponent: () => import('./Modules/auth/auth.component').then(m => m.AuthComponent)},
 {
  path: '',
  pathMatch: 'full',
  redirectTo: 'login',
},

 {
  path: '',
  loadChildren: () =>
    import('./Modules/layouts/layouts.routes').then(
      (m) => m.routes
    ),
},

 {
  path: 'login',
  loadChildren: () => import('./Modules/auth/auth.routes').then((m) => m.routes),
 },
 { path: '**', redirectTo: 'error/404' },



];
