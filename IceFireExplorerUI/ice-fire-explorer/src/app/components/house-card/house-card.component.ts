import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HouseCardModel } from '../../models/house-card';
import { EmptyHeartComponent } from '../../assets/svg/empty-heart.component';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.css'],
  imports: [RouterModule, EmptyHeartComponent]
})
export class HouseCardComponent {
  @Input() house!: HouseCardModel;

  getHouseId(): string {
    return this.house.url.split('/').pop() || '';
  }
}
