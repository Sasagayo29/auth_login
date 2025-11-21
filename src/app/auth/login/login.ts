import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  registerForm!: FormGroup;
  
  isLoginMode = true; 
  isDarkMode = false;

  showLoginPass = false;
  showRegPass = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  togglePass(field: 'login' | 'register') {
    if (field === 'login') this.showLoginPass = !this.showLoginPass;
    if (field === 'register') this.showRegPass = !this.showRegPass;
  }

  onSubmitLogin() {
    if (this.loginForm.valid) {
      console.log('Login:', this.loginForm.value);
    }
  }

  onSubmitRegister() {
    if (this.registerForm.valid) {
      if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
        alert('As senhas não coincidem');
        return;
      }
      console.log('Registro:', this.registerForm.value);
    }
  }
}