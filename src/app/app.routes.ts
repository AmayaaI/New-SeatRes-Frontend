import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { InternDashboardComponent } from './intern-dashboard/intern-dashboard.component';
//import { ForgetPasswordComponent } from './forgot-password/forgot-password.component';
//import { VerifyCodeComponent } from './verify-code/verify-code.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  
  { path: 'login', component: LoginComponent },  
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'intern-dashboard', component: InternDashboardComponent }
 // { path: 'forgot-password', component: ForgetPasswordComponent },
  //{ path: 'verify-code', component: VerifyCodeComponent },
 
];
