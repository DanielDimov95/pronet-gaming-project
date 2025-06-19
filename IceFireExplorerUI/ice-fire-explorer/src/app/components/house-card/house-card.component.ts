import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HouseCardModel } from '../../models/house-card';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.css'],
  imports: [RouterModule]
})
export class HouseCardComponent {
  @Input() house!: HouseCardModel;

  getHouseId(): string {
    return this.house.url.split('/').pop() || '';
  }
}
