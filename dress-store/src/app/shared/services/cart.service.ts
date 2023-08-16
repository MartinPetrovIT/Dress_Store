import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpConfigDressStore } from 'src/app/http.config';
import { IProductModalModel } from '../product-modal/product.modal.model';
import { AuthService } from './auth.service';
import { IProductCartModel } from './product.cart.model';
import { BehaviorSubject, Observable, count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cartCount$: Observable<number> = this.cartCountSubject.asObservable();
  private baseUrl: string = '';
  constructor(private http: HttpClient, private authService: AuthService, private conf: HttpConfigDressStore) {
    this.baseUrl = `${this.conf.baseUrl}/user`;
   }
  
  private getHttpHeaders(token: string | null){
    return {
     headers: new HttpHeaders({
       'Authorization': `${token}`,
       'Content-Type': 'application/json'
     })
   }; 
   }

   addToCartList(product: IProductModalModel){
    const token = this.authService.getToken();
    const httpOptions =  this.getHttpHeaders(token);
    let productRequest = this.mapToProductCartModel(product);
    
    let response = this.http.post<{ message: string }>(`${this.baseUrl}/addToCart`, { product: productRequest}, httpOptions);
    return response;
  }

  getCartCount(count?: number | null){
    const token = this.authService.getToken();
    const httpOptions =  this.getHttpHeaders(token);
    console.log(this.baseUrl, "baseUrl")
    if(count != null && count >= 0){
      this.cartCountSubject.next(count);
    } else {
      this.http.get<{ count: number }>(`${this.baseUrl}/cartCount`, httpOptions).subscribe(response => {
        this.cartCountSubject.next(response.count);
      });
    }
  }
  
  getCartItems(){
    
    const token = this.authService.getToken();
    const httpOptions =  this.getHttpHeaders(token);
    return this.http.get<{ cartItems: IProductCartModel[] }>(`${this.baseUrl}/cartData`, httpOptions);
  }


  triggerCartandWishCountUpdate(cartCount?: number | null, wishCount?: number | null): void {
    
    this.getCartCount(cartCount);
  }
 
 
  changeCartList(products: IProductCartModel[]){
    const token = this.authService.getToken();
    const httpOptions = this.getHttpHeaders(token);
    
    let response = this.http.post(`${this.baseUrl}/changeCart`, { products: products}, httpOptions);
    return response;
  }

 
  private mapToProductCartModel(productModal: IProductModalModel){
  
    let productCart: IProductCartModel = {
        real_id : productModal._id,
        _id : Math.floor(Math.random() * 10000000) + productModal._id + Math.floor(Math.random() * 10000000),
        brand: productModal.brand, 
        name: productModal.name,
        color: productModal.color,
        gender: productModal.gender,
        size: productModal.size,
        imageUrl: productModal.imageUrls[0],
        price: productModal.price,
        quantity: 1,
        total: productModal.price
     }

     return productCart;
  }
}
