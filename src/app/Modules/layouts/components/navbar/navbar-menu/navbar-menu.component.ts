import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../../../service/menu.service';
import { MenuItem, SubMenuItem } from '../../../models/menu.model';
import { NgClass, NgFor } from '@angular/common';
import { NavbarSubmenuComponent } from '../navbar-submenu/navbar-submenu.component';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-menu',
  standalone: true,
  imports: [ NgFor,
    NgClass,
    NavbarSubmenuComponent],
  templateUrl: './navbar-menu.component.html',
  styleUrl: './navbar-menu.component.css'
})
export class NavbarMenuComponent implements OnInit {


  private showMenuClass = ['scale-100', 'animate-fade-in-up', 'opacity-100', 'pointer-events-auto'];
  private hideMenuClass = ['scale-95', 'animate-fade-out-down', 'opacity-0', 'pointer-events-none'];


  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleMenu(menu: MenuItem): void {
    menu.selected = !menu.selected;
  }

  public mouseEnter(event: any): void {
    let element = event.target.querySelector('app-navbar-submenu').children[0];
    if (element) {
      this.hideMenuClass.forEach((c) => element.classList.remove(c));
      this.showMenuClass.forEach((c) => element.classList.add(c));
    }
  }

  public mouseLeave(event: any): void {
    let element = event.target.querySelector('app-navbar-submenu').children[0];
    if (element) {
      this.showMenuClass.forEach((c) => element.classList.remove(c));
      this.hideMenuClass.forEach((c) => element.classList.add(c));
    }
  }

}
