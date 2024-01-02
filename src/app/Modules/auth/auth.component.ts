
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import LoginComponent from './login/login.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet,LoginComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export default class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
