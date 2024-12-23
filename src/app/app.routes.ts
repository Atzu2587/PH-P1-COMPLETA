import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'circulo',
    loadComponent: () => import('./circulo/circulo.page').then((m) => m.CirculoPage),
  },
  {
    path: 'triangulo',
    loadComponent: () => import('./triangulo/triangulo.page').then((m) => m.TrianguloPage),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
