import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { CartService } from '../shared/services/cart.service';

@Injectable({
  providedIn: 'root',
})
export class AuthRedirectGuard implements CanActivate {
  constructor(private authService: AuthService,private cartService: CartService, private router: Router) {}
  isAuthenticated: boolean = false;

  canActivate(): boolean {
    this.authService.isAuthenticated().subscribe((authenticated) => {
      this.isAuthenticated = authenticated;
    });
    
    
    this.cartService.triggerCartandWishCountUpdate();

    if (this.isAuthenticated) {
      this.router.navigate(['/']); 
      return false;
    }
    return true;
  }
}