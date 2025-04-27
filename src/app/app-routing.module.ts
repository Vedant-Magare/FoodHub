import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuServiceComponent } from './components/menu-service/menu-service.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu-service', component: MenuServiceComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'order-success', component: OrderSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
