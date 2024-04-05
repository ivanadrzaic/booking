import { Route } from '@angular/router';

import { AppLayoutComponent } from './app-layout/app-layout.component';

export const ROUTES: Route[] = [
    { path: 'home', component: AppLayoutComponent },
    { path: '**', redirectTo: '/home/' }
];