import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  cartCount:number = 0;

  constructor(private authService: AuthService, private cartService: CartService, private router: Router) {
  }

  ngOnInit() {
    this.authService.isAuthenticated().subscribe((authenticated) => {
      this.isAuthenticated = authenticated;
      this.cartService.triggerCartandWishCountUpdate()
    });;

    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });


  }
}