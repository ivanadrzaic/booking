import { Route, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { TourComponent } from './components/tour/tour.component';
import { VacationHomeComponent } from './components/vacation-home/vacation-home.component';

export const ROUTES: Route[] = [
    { path: '', component: ContactComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'tour', component: TourComponent},
    { path: 'vacationhome', component: VacationHomeComponent },


];



