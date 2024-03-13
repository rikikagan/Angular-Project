import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent) },
    { path: 'register', loadComponent: () => import('./components/register/register.component').then(c => c.RegisterComponent) },
    { path: 'log-out-button', loadComponent: () => import('./components/log-out-button/log-out-button.component').then(c => c.LogOutButtonComponent) },
    { path: 'recipes', loadChildren: () => import('./components/recipe/recipe-module.module').then(c => c.RecipeModuleModule) },
    { path: '**', component: NotFoundComponent },
];
