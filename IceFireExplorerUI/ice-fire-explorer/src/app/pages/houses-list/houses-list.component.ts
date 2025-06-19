import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HousesService } from '../../services/houses.service';
import { BehaviorSubject, Observable, combineLatest, map, switchMap, catchError, of } from 'rxjs';
import { HouseCardComponent } from '../../components/house-card/house-card.component';
import { HouseCardModel } from '../../models/house-card';
import { Store } from '@ngrx/store';
import { addFavorite, removeFavorite } from '../../state/favorites.actions';
import { selectFavorites } from '../../state/favorites.selectors';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.css'],
  imports: [CommonModule, RouterModule, HouseCardComponent]
})
export class HousesListComponent implements OnInit {
  private pageSubject = new BehaviorSubject<number>(1);
  private searchSubject = new BehaviorSubject<string>('');
  private housesPageSubject = new BehaviorSubject<HouseCardModel[]>([]);
  

  readonly totalHouses = 444;
  readonly pageSize = 24;
  isLoading = false;
  error: string | null = null;

  // This observable emits the filtered houses
  houses$: Observable<HouseCardModel[]>;
  currentPage$ = this.pageSubject.asObservable();
  search$ = this.searchSubject.asObservable();
  favorites$: Observable<HouseCardModel[]>;

  constructor(private housesService: HousesService, private store: Store) {
    // Fetch houses only when page changes
    this.pageSubject.pipe(
      switchMap(page => {
        this.isLoading = true;
        this.error = null;
        return this.housesService.getHouses(page, this.pageSize).pipe(
          map(houses => {
            this.isLoading = false;
            return houses;
          }),
          catchError(error => {
            this.isLoading = false;
            this.error = error.message;
            return of([]);
          })
        );
      })
    ).subscribe(houses => this.housesPageSubject.next(houses));

    // Filter the fetched houses in-memory when search changes
    this.houses$ = combineLatest([this.housesPageSubject, this.searchSubject]).pipe(
      map(([houses, search]) =>
        houses.filter(house =>
          house.name.toLowerCase().includes(search.toLowerCase())
        )
      )
    );

    this.favorites$ = this.store.select(selectFavorites);
  }

  ngOnInit(): void {}

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchSubject.next(value);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.pageSubject.next(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.pageSubject.next(this.currentPage + 1);
    }
  }

  get currentPage(): number {
    return this.pageSubject.value;
  }

  get totalPages(): number {
    return Math.ceil(this.totalHouses / this.pageSize);
  }

  toggleFavorite(house: HouseCardModel, favorites: HouseCardModel[]) {
    if (favorites.some(fav => fav.url === house.url)) {
      this.store.dispatch(removeFavorite({ houseId: house.url }));
    } else {
      this.store.dispatch(addFavorite({ house }));
    }
  }
}
