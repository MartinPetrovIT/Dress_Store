import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { GlobalLoaderService } from './core/global-loader/global-loader.service';
import { CartService } from './shared/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'dress-store';

  constructor(private router: Router, private cartService: CartService ,private globalLoaderService: GlobalLoaderService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.globalLoaderService.show();
        this.cartService.triggerCartandWishCountUpdate();
      } else if (event instanceof NavigationEnd) {
        this.globalLoaderService.hide();
      }
    });
  }
}
