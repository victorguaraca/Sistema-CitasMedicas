import { Component, Input } from '@angular/core';
import { SubMenuItem } from '../../../models/menu.model';
import { MenuService } from '../../../service/menu.service';
import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-submenu',
  standalone: true,
  imports: [   NgClass,
    NgFor,
    NgTemplateOutlet,
    RouterLinkActive,
    RouterLink,
   ],
  templateUrl: './sidebar-submenu.component.html',
  styleUrl: './sidebar-submenu.component.css'
})
export class SidebarSubmenuComponent {

  @Input() public submenu = <SubMenuItem>{};

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }

}
