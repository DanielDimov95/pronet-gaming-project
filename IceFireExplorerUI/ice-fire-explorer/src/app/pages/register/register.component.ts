import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) return;
    this.loading = true;
    this.error = null;
    const { username, password, confirmPassword } = this.registerForm.value;
    if (password !== confirmPassword) {
      this.error = 'Passwords do not match';
      this.loading = false;
      return;
    }
    this.auth.register(username, password).subscribe({
      next: () => this.router.navigate(['/']),
      error: err => {
        this.error = err.error?.message || 'Register failed';
        this.loading = false;
      }
    });
  }
}
