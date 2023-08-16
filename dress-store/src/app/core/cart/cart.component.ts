import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';
import { IProductCartModel } from 'src/app/shared/services/product.cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent  {
  customer = {
    name: "name",
    email: "name",
    phone: "name",
    address: "name",
    familyName: "name",
  };

  items: IProductCartModel[] = [];

  constructor(private cartService: CartService) {
    this.cartService.getCartItems().subscribe(items => {
      this.items = items.cartItems
    })
  }


  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100]

  submitOrder() {
    console.log("Not implemented submitOrder")
  }
  updateTotal(i: number) {
    this.items[i].total = this.items[i].price * this.items[i].quantity;
    this.cartService.changeCartList(this.items).subscribe(mess => { console.log(mess) })
  }

  removeFromCart(i: number) {
    this.items.splice(i, 1)

    this.cartService.changeCartList(this.items).subscribe(mess => { console.log(mess) })
   
    this.cartService.triggerCartandWishCountUpdate(this.items.length);
  }
}
