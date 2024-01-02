import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClickOutsideDirective } from '../../../../../shared/directivas/click-outside.directive';

@Component({
  selector: 'app-perfil-menu',
  standalone: true,
  imports: [ ClickOutsideDirective,
    NgClass,
    RouterLink,],
  templateUrl: './perfil-menu.component.html',
  styleUrl: './perfil-menu.component.css'
})
export class PerfilMenuComponent {
  public isMenuOpen = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
