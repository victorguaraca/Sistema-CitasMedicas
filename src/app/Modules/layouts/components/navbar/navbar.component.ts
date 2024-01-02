import { Component } from '@angular/core';
import { MenuService } from '../../service/menu.service';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { PerfilMenuComponent } from './perfil-menu/perfil-menu.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NavbarMenuComponent,
    PerfilMenuComponent,
    NavbarMobileComponent,

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = true;
  }

}
