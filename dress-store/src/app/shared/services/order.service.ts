import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpConfigDressStore } from 'src/app/http.config';
import { IProductCartModel } from './product.cart.model';
import { ICustomerCartModel } from 'src/app/core/cart/customer.model';
import { IOrder } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl: string = '';
  constructor(private http: HttpClient, private authService: AuthService, private conf: HttpConfigDressStore) {
    this.baseUrl = `${this.conf.baseUrl}/order`;
   }

   private getHttpHeaders(token: string | null){
    return {
     headers: new HttpHeaders({
       'Authorization': `${token}`,
       'Content-Type': 'application/json'
     })
   }; 
   }

   private makeDateStringBGFormat(date: Date) : string
   {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');

    let hour = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2,'0');

    return `${day}.${month}.${year} | ${hour}:${minutes}`
   }

   getAllOrdersByUser(){
    const token = this.authService.getToken();
    const httpOptions =  this.getHttpHeaders(token);
    return this.http.get<{ orders: IOrder[]  }>(`${this.baseUrl}/getAllByUser`, httpOptions);
   }
   addOrder(products: IProductCartModel[] , customer: ICustomerCartModel, totalPrice: number){
   
    const token = this.authService.getToken();
    const httpOptions =  this.getHttpHeaders(token);
    let request = {...customer, products: [], orderDate: '', totalPrice: 0};
    request.totalPrice = totalPrice;
    request.orderDate = this.makeDateStringBGFormat(new Date());
    request.products =  JSON.parse(JSON.stringify(products));
    
    let response = this.http.post<{ message: string }>(`${this.baseUrl}/addOrder`, { order: request}, httpOptions);
    return response;
  }
   
}
