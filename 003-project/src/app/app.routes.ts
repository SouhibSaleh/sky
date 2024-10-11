import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component')
            .then(m => m.HomeComponent)
    },
    {
        path: 'profiles',
        loadComponent: () => import('./pages/profiles/profiles.component')
            .then(m => m.ProfilesComponent)
    },
    {
        path: "vacation_requests/:id",
        loadComponent: () => import('./pages/vacations-requests/vacations-requests.component')
            .then(m => m.VacationsRequestsComponent)
    },
    {
        path: "vacation_requests",
        redirectTo: 'vacation_requests/1'

    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    },

];
