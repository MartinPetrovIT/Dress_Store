import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

function passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  const rePassword = control.get('rePassword');

  if (!password || !rePassword) {
    return null;
  }

  return password.value === rePassword.value ? null : { 'passwordMismatch': true };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  error: string = '';

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rePassword: ['', Validators.required]
    }, { validator: passwordMatchValidator });
  }

  register(){
    if (!this.registerForm.invalid) {
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;

      this.authService.register(email, password).subscribe(response => {

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
      this.registerForm.markAllAsTouched();
    }
  }
}
