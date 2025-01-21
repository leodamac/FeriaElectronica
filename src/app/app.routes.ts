import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lector-qr',
    loadComponent: () => import('./lector-qr/lector-qr.page').then( m => m.LectorQRPage)
  },
  {
    path: '',
    redirectTo: 'lector-qr',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'lector-qr'
  }
];
