import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated().subscribe((authenticated) => {
      this.isAuthenticated = authenticated;
    });
  }
}