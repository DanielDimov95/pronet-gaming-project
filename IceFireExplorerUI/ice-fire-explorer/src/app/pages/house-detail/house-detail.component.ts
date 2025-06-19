import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
  import { CommonModule } from '@angular/common';
  import { HouseDetailModel } from '../../models/house-details';
import { HousesService } from '../../services/houses.service';
import { EmptyHeartComponent } from '../../assets/svg/empty-heart.component';

@Component({
  selector: 'app-house-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, EmptyHeartComponent],
  templateUrl: './house-detail.component.html',
  styleUrl: './house-detail.component.css'
})
export class HouseDetailComponent {
  private route = inject(ActivatedRoute);
  private housesService = inject(HousesService);

  house: HouseDetailModel | null = null;
  isLoading = true;
  error: string | null = null;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.housesService.getHouseById(id).subscribe({
        next: (house) => {
          this.house = house;
          this.isLoading = false;
        },
        error: (err) => {
          this.error = err.message || 'Failed to load house details.';
          this.isLoading = false;
        }
      });
    } else {
      this.error = 'No house ID provided.';
      this.isLoading = false;
    }
  }

  isFavorite(houseUrl: string | undefined | null): boolean {
    if (!houseUrl) return false;
    const favorites = JSON.parse(localStorage.getItem('favoriteHouses') || '[]');
    return favorites.includes(houseUrl);
  }

  toggleFavorite(houseUrl: string | undefined | null) {
    if (!houseUrl) return;
    let favorites = JSON.parse(localStorage.getItem('favoriteHouses') || '[]');
    if (favorites.includes(houseUrl)) {
      favorites = favorites.filter((url: string) => url !== houseUrl);
    } else {
      favorites.push(houseUrl);
    }
    localStorage.setItem('favoriteHouses', JSON.stringify(favorites));
  }
}
