
import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './paginas/admin/admin.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent,
  children: [
    {
      path: '',
      redirectTo:'admin-dashboard',
      pathMatch:'full',


      children: [
        { path: '', redirectTo: 'admin-dashboard', pathMatch: 'full' },
        { path: '',component: AdminComponent}
      ],
    },


  ]}
];

