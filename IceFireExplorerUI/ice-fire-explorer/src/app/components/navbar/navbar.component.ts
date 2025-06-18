import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, HamburgerMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuOpen = false;
  childrenOpen = false;

  constructor(public authService: AuthService) {}
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleChildren() {
    this.childrenOpen = !this.childrenOpen;
  }
}
