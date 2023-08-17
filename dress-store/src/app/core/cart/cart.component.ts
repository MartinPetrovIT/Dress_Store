import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';
import { IProductCartModel } from 'src/app/shared/services/product.cart.model';
import { ICustomerCartModel } from './customer.model';
import { OrderService } from 'src/app/shared/services/order.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {
  checkoutForm: FormGroup;
  totalPrice: number = 0;

  items: IProductCartModel[] = [];
  customer: ICustomerCartModel = {
    name: "",
    email: "",
    phone: "",
    address: "",
    familyName: ""
  }
  constructor(private cartService: CartService,private messageService: MessageService, private orderService: OrderService, private formBuilder: FormBuilder, private router: Router) {
    this.checkoutForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', [Validators.required]],
      familyName: ['', [Validators.required]],
    });

    this.cartService.getCartItems().subscribe(items => {
      this.items = items.cartItems
    })

    this.cartService.getCustomer().subscribe(customer => {
      this.customer = customer.customer;
    })

  }


  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100]

  submitOrder() {
    if (!this.checkoutForm.invalid) {

      if (this.items.length <= 0) {
         this.messageService.showMessage("You have to add products first", 4000, 'yellow')
      }
      else {
        this.orderService.addOrder(this.items, this.customer, this.totalPrice).subscribe(res => {
          console.log(res)
        })
        this.items = [];
        this.cartService.triggerCartandWishCountUpdate(this.items.length);
        this.cartService.changeCartList(this.items).subscribe(mess => { console.log(mess) })
        this.router.navigate(['/'])
        this.messageService.showMessage(`Thank you for your purchase, ${this.customer.name} ${this.customer.familyName}. Your patronage is a big deal for small businesses like ours. We hope to see you again soon!`, 6000, 'green')
      }
    } else {
      this.checkoutForm.markAllAsTouched()
      console.log("invalid form")
    }
  }

  calculateTotal(): string {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    this.totalPrice = total;
    return total.toFixed(2);
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
