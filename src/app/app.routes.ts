import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home'),
    title: 'Converge — Technology & Digital Solutions',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about'),
    title: 'About — Converge',
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services'),
    title: 'Services — Converge',
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers'),
    title: 'Careers — Converge',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact'),
    title: 'Contact — Converge',
  },
  { path: '**', redirectTo: '' },
];
