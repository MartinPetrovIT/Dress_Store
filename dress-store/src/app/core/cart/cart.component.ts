import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
   customer = {name: "name",
   email: "name",
   phone: "name",
   address: "name",
   familyName: "name", };
  quantities = [1,2,3,4,5,6,7,8,9]
  cartItems: any = [{image: "assets/img/babenciaga.jpg", 
  name: "T-SHirt", 
  quantity: 1, 
  price: 1.50,
   total: 11}, {image: "assets/img/babenciaga.jpg", 
   name: "T-SHirt", 
   quantity: 1, 
   price: 1.50,
    total: 11},{image: "assets/img/babenciaga.jpg", 
    name: "T-SHirt", 
    quantity: 1, 
    price: 1.50,
     total: 11}]



     submitOrder(){
      console.log("Not implemented submitOrder")

     }
  updateTotal(item: any) {
    console.log("Not implemented updateTotal")
  }

  
  removeFromCart(item: any) {
    console.log("Not implemented removeFromCart")
  }
}
