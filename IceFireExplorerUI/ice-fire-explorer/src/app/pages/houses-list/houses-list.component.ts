import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HousesService, House } from '../../services/houses.service';
import { BehaviorSubject, Observable, combineLatest, map, switchMap, catchError } from 'rxjs';
import { HouseCardComponent } from '../../components/house-card/house-card.component';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.css'],
  imports: [CommonModule, RouterModule, HouseCardComponent]
})
export class HousesListComponent implements OnInit {
  private pageSubject = new BehaviorSubject<number>(1);
  private searchSubject = new BehaviorSubject<string>('');
  
  readonly pageSize = 24;
  isLoading = false;
  error: string | null = null;
  
  houses$: Observable<House[]>;
  currentPage$ = this.pageSubject.asObservable();
  search$ = this.searchSubject.asObservable();

  constructor(private housesService: HousesService) {
    this.houses$ = combineLatest([this.pageSubject, this.searchSubject]).pipe(
      switchMap(([page, search]) => {
        this.isLoading = true;
        this.error = null;
        return this.housesService.getHouses(page, this.pageSize).pipe(
          map(houses => houses.filter(house => 
            house.name.toLowerCase().includes(search.toLowerCase())
          )),
          map(houses => {
            this.isLoading = false;
            return houses;
          }),
          catchError(error => {
            this.isLoading = false;
            this.error = error.message;
            return [];
          })
        );
      })
    );
  }

  ngOnInit(): void {}

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchSubject.next(value);
  }

  prevPage(): void {
    this.pageSubject.next(Math.max(1, this.pageSubject.value - 1));
  }

  nextPage(): void {
    this.pageSubject.next(this.pageSubject.value + 1);
  }

  get currentPage(): number {
    return this.pageSubject.value;
  }
}
