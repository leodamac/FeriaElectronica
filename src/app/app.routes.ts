import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'lector-qr',
    loadComponent: () => import('./lector-qr/lector-qr.page').then( m => m.LectorQRPage)
  },
  // Añade una ruta wildcard al final para manejar rutas no encontradas
  {
    path: '**',
    redirectTo: 'home'
  }
];