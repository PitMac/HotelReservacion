import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
];
