import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { HttpConfigDressStore } from 'src/app/http.config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})

export class AuthService {
   isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private conf: HttpConfigDressStore) {}

   isAuthenticated() {
    this.isAuthenticated$.next(!!this.getToken());
    return this.isAuthenticated$.asObservable();
  }

  login(email: string, password: string) {
    return this.http.post<{ status: number,  data: string }>(`${this.conf.baseUrl}/auth/login`, { email, password }, httpOptions);
  }

  register(email: string, password: string) {
    return this.http.post<{ status: number,  data: string }>(`${this.conf.baseUrl}/auth/register`, { email, password }, httpOptions);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.isAuthenticated()
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated()
  }
}