import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass,
    NgIf,
    SidebarMenuComponent,
    RouterLink,],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(public themeService: ThemeService, public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }

}
