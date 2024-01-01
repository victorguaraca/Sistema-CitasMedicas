import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../routes/routes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgClass,
    NgIf,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  public routes = routes;

  constructor(private readonly _formBuilder: FormBuilder, private readonly _router: Router) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    const { email, password } = this.form.value;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this._router.navigate([routes.Home]);
  }

}
