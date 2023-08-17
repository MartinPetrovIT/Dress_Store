import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithLayoutComponent } from './layouts/with-layout/with-layout.component';
import { WithoutLayoutComponent } from './layouts/without-layout/without-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './core/home/home.component';
import { ClothesComponent } from './core/clothes/clothes.component';
import { CartComponent } from './core/cart/cart.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthRedirectGuard } from './auth/auth-redirect.guard';
import { LogoutComponent } from './auth/logout/logout.component';
import { ProfileComponent } from './core/profile/profile.component';
import { PersonalInfoComponent } from './core/personal-info/personal-info.component';
import { OrdersComponent } from './core/orders/orders.component';
import { WishlistComponent } from './core/wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '',
    component: WithLayoutComponent, 
    children: [
      { path: '', component: HomeComponent ,
        pathMatch: "full"
      },
      { path: 'login', component: LoginComponent, canActivate: [AuthRedirectGuard] },
      { path: 'register', component: RegisterComponent, canActivate: [AuthRedirectGuard] },
      { path: 'clothes', component: ClothesComponent },
      { path: 'cart', component: CartComponent, canActivate: [AuthGuard] }, 
      { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
      { path: 'myProfile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'wishlist', component: WishlistComponent, canActivate: [AuthGuard] },
      // { path: 'personalInformation', component: PersonalInfoComponent, canActivate: [AuthGuard] },
      // { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
     // { path: 'wishlist', component: WishlistComponent, canActivate: [AuthGuard] },
      // Other routes with layout
    ],
  },
  {
    path: '',
    component: WithoutLayoutComponent,
    children: [
      // Other routes with layout
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}