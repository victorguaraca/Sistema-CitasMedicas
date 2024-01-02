import { Routes } from '@angular/router';
import { SidebarComponent } from './Modules/layouts/components/sidebar/sidebar.component';
import { LayoutsComponent } from './Modules/layouts/layouts.component';

import { AdminDashboardComponent } from './Modules/dashboard/admin-dashboard/admin-dashboard.component';
import DashboardComponent from './Modules/dashboard/dashboard.component';
import AdminComponent from './Modules/dashboard/paginas/admin/admin.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },

 {
  path: 'auth',
  loadComponent: () => import('../app/Modules/auth/auth.component'),
  children: [
    { path: 'login',title: 'Login',
    loadComponent: () => import('../app/Modules/auth/login/login.component')
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
      },

  ],


 },


 {
    path: 'dashboard',
    component:LayoutsComponent,
   children: [
    {
    path: 'dashboard',title: 'Dashboard',
    component:DashboardComponent,
    children: [
      {
        path: 'admin',title: 'Admin',
        component:AdminComponent
      },
      {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
        },
    ]
    },
    {
      path: 'admin',title: 'Admin',
      component:AdminDashboardComponent
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'

    },

    ]


 }




];
