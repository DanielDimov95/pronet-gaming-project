import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [CommonModule],
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