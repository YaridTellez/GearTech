import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { HomeComponent } from './Views/home/home.component';
import { ProductsComponent } from './Views/products/products.component';
import { RegisterComponent } from './Views/register/register.component';
import { SignInComponent } from './Views/signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch:'full' },
  { path: 'Home', component:HomeComponent},
  { path: 'Dashboard', component:DashboardComponent},
  { path: 'SignIn', component: SignInComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
