import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  imports: [],
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent {
  @Input() isOpen: boolean = false;
  @Output() toggleMenu = new EventEmitter<void>();

  onToggle(): void {
    this.toggleMenu.emit();
  }
} 