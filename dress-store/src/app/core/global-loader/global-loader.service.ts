import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderService {
  public isVisible$ = new BehaviorSubject<boolean>(false);


  show(){
    this.isVisible$.next(true);
  }
  
  hide(){
    this.isVisible$.next(false);
  }
}
