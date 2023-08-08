import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  isAuthenticated() {
    return this.isAuthenticated$.asObservable();
  }

  login() {
    this.isAuthenticated$.next(true);
  }

  register() {
    this.isAuthenticated$.next(true);
  }

  logout() {
    this.isAuthenticated$.next(false);
  }
}