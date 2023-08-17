import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpConfigDressStore } from 'src/app/http.config';
import { IProductExtended } from '../models/productExtended.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  wishCount$: Observable<number> = this.wishCountSubject.asObservable();
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
   changeWishList(products: IProductExtended[]){
    const token = this.authService.getToken();
    const httpOptions = this.getHttpHeaders(token);
    
    let response = this.http.post(`${this.baseUrl}/changeWishList`, { products: products}, httpOptions);
    return response;
  }
  
  getWishes(){
    const token = this.authService.getToken();
    const httpOptions = this.getHttpHeaders(token);
    
    let response = this.http.get<{ wishes: IProductExtended[]}>(`${this.baseUrl}/getWishes`, httpOptions);
    return response;
  }

   getWishCount(count?: number | null){
    const token = this.authService.getToken();
    const httpOptions =  this.getHttpHeaders(token);
    console.log(count)
    if(count != null && count >= 0){
      this.wishCountSubject.next(count);
    } else {
      this.http.get<{ count: number }>(`${this.baseUrl}/wishCount`, httpOptions).subscribe(response => {
        this.wishCountSubject.next(response.count);
      });
    }
  }
}
