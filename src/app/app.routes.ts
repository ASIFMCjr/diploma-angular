import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { authGuard } from './auth-guard';

// [
//     index("pages/home/ui/home.tsx"),
//     route("login", "pages/login/login.tsx"),
//     layout("./pages/mainLayout.tsx", [
//       route("users", "pages/users/index.tsx"),
//       route("reports", "pages/reports/index.tsx"),
//       route("dashboard", "pages/dashboard/index.tsx"),
//       route("changes", "pages/changes/index.tsx"),
//       route("stats", "pages/statistics/index.tsx")
//     ]),
//   ]

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
    loadComponent: () => import('./users/users').then((m) => m.Users),
    canActivate: [authGuard],
  },
  {
    path: 'profile',
    title: 'Личный кабинет',
    loadComponent: () => import('./profile/profile').then((m) => m.Profile),
    canActivate: [authGuard],
  },
  {
    path: 'changelog',
    title: 'Изменения',
    loadComponent: () =>
      import('./changelog/changelog').then((m) => m.Changelog),
    canActivate: [authGuard],
  },
  {
    path: 'reports',
    title: 'Отчеты',
    loadComponent: () => import('./reports/reports').then((m) => m.Reports),
    canActivate: [authGuard],
  },
  {
    path: 'dashboard',
    title: 'Статистика',
    loadComponent: () =>
      import('./statistics/statistics').then((m) => m.Statistics),
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
