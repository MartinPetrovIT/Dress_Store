import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  error: string = '';

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login() {
    if (!this.loginForm.invalid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      this.authService.login(email, password).subscribe(response => {

        if (response.status === 200) {
          this.authService.setToken(response.data);
          this.router.navigate(['/'])
        }
        else {
          this.error = response.data;     
          setTimeout(() => {
            this.error = ''
          }, 5000);
        }
      });
    } else{
      this.error = 'Invalid credentials'
      setTimeout(() => {
        this.error = ''
      }, 5000);
    }
  }
}
