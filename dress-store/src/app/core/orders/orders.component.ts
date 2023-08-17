import { Component } from '@angular/core';
import { IOrder } from 'src/app/shared/models/order.model';
import { OrderService } from 'src/app/shared/services/order.service';
import { IProductCartModel } from 'src/app/shared/services/product.cart.model';
import { IOrderExtended } from './orderExtended.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  orders: IOrderExtended[] = [];  
  selectedOrder: IProductCartModel[] = [];
  constructor(private orderService: OrderService){
     this.orderService.getAllOrdersByUser().subscribe( orders => {
      for (let order of orders.orders){
         this.orders.push({...order, isOpen: false})
      }
     })
  }
  toggleAccordion(order: IOrderExtended ) {

    if(order.isOpen === true){
        order.isOpen = false;
    } else{
      if(order.products != this.selectedOrder)
        this.selectedOrder = order.products;
      this.orders.forEach(element => {
        element.isOpen = false;
      });
      order.isOpen = true;
    }   
  }

  // Pagination
  currentPage = 1;
  ordersPerPage = 5;

  getTotalPages(): number[] {
    const totalOrders = this.orders.length;
    const totalPages = Math.ceil(totalOrders / this.ordersPerPage);

    let pages: number[] = [];
    for (let index = 1; index <= totalPages; index++) {
      pages.push(index)
    }
    return pages;
  }

  getPaginatedOrders() {
    const startIndex = (this.currentPage - 1) * this.ordersPerPage;
    return this.orders.slice(startIndex, startIndex + this.ordersPerPage);
  }

  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }
}
