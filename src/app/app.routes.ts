import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { authGuard } from './auth-guard';

// {
//   path: 'admin',
//   providers: [AdminService, { provide: ADMIN_API_KEY, useValue: '12345' }],
//   children: [
//     { path: 'users', component: AdminUsersComponent },
//     { path: 'teams', component: AdminTeamsComponent },
//   ],
// },

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'login',
    title: 'Вход',
    component: Login,
  },
  {
    path: 'home',
    title: 'Домашняя страница',
    component: Home,
    canActivate: [authGuard],
  },
  {
    path: 'users',
    title: 'Пользователи',
    loadComponent: () => import('./pages/users/users').then((m) => m.Users),
    canActivate: [authGuard],
  },
  {
    path: 'profile',
    title: 'Личный кабинет',
    loadComponent: () => import('./pages/profile/profile').then((m) => m.Profile),
    canActivate: [authGuard],
  },
  {
    path: 'changelog',
    title: 'Изменения',
    loadComponent: () =>
      import('./pages/changelog/changelog').then((m) => m.Changelog),
    canActivate: [authGuard],
  },
  {
    path: 'reports',
    title: 'Отчеты',
    loadComponent: () => import('./pages/reports/reports').then((m) => m.Reports),
    canActivate: [authGuard],
  },
  {
    path: 'dashboard',
    title: 'Статистика',
    loadComponent: () =>
      import('./pages/statistics/statistics').then((m) => m.Statistics),
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
