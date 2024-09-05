import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { InternDashboardComponent } from './intern-dashboard/intern-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
//import { ForgetPasswordComponent } from './forgot-password/forgot-password.component';
//import { VerifyCodeComponent } from './verify-code/verify-code.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { breadcrumb: 'Login' } },
  { path: 'register', component: RegisterComponent, data: { breadcrumb: 'Register' } },
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: 'intern-dashboard', component: InternDashboardComponent, data: { breadcrumb: 'Intern Dashboard' } },
  { path: 'admin-dashboard', component: AdminDashboardComponent, data: { breadcrumb: 'Admin Dashboard' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  

 
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },  

  // { path: 'login', component: LoginComponent },  
  // { path: 'register', component: RegisterComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'intern-dashboard', component: InternDashboardComponent },
  // { path: 'admin-dashboard', component: AdminDashboardComponent }

 // { path: 'forgot-password', component: ForgetPasswordComponent },
  //{ path: 'verify-code', component: VerifyCodeComponent },
 
];
