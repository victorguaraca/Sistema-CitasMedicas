import { LayoutsComponent } from './layouts.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

export const routes: Routes = [

  {
    path: '',
    component: LayoutsComponent,


    children: [
      {
        path:'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.routes').then((m) => m.routes),
      },
    ]
    }

];

