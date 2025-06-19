import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { House } from '../../services/houses.service';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.css'],
  imports: [CommonModule, RouterModule]
})
export class HouseCardComponent {
  @Input() house!: House;

  getHouseId(): string {
    return this.house.url.split('/').pop() || '';
  }
}
