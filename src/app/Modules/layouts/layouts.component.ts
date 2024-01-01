import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationEnd, Router, RouterOutlet ,Event} from '@angular/router';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [SidebarComponent,NavbarComponent,FooterComponent,RouterOutlet],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {

  private mainContent: HTMLElement | null = null;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.mainContent) {
          this.mainContent!.scrollTop = 0;
        }
      }
    });
  }

  ngOnInit(): void {
    this.mainContent = document.getElementById('main-content');
  }

}
