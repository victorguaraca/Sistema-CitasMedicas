import { Component, Input, OnInit } from '@angular/core';
import { SubMenuItem } from '../../../models/menu.model';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar-submenu',
  standalone: true,
  imports: [ NgFor,
    NgTemplateOutlet,
    RouterLinkActive,
    RouterLink,
    NgIf,
    AngularSvgIconModule,FormsModule,FormsModule],
  templateUrl: './navbar-submenu.component.html',
  styleUrl: './navbar-submenu.component.css'
})
export class NavbarSubmenuComponent  implements OnInit{

  @Input()  submenu= <SubMenuItem[]>{};

  constructor() {}

  ngOnInit(): void {}

}
