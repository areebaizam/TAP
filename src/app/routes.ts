import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    loadChildren: () => HOME_ROUTES,
  },
  {
    path: 'admin',
    loadChildren: () => ADMIN_ROUTES,
  },
  {
    path: '404',
    loadComponent: () =>
      import('./shared/components').then((mod) => mod.NotFoundComponent),
  },
  { path: '**', redirectTo: '404' },
];

export const ADMIN_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    //Lazy Load Single Components
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/admin').then((mod) => mod.AdminComponent),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/admin').then((mod) => mod.DashboardComponent),
      },
    ],
  },
];

export const HOME_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home').then((mod) => mod.HomeComponent),
      },
    ],
  },
];
