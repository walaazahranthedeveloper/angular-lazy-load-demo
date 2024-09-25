import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
      path: 'lazy',
      loadComponent: () =>
        import('./lazy/lazy.component').then((m) => m.LazyComponent), // Lazy load the component
    },
    { path: '**', redirectTo: '' },
  ];
