import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { HouseCardModel } from '../models/house-card';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  private apiUrl = 'http://localhost:4000/houses';

  constructor(private http: HttpClient) {}

  getHouses(page: number, pageSize: number): Observable<HouseCardModel[]> {
    return this.http.get<HouseCardModel[]>(`${this.apiUrl}?page=${page}&pageSize=${pageSize}`).pipe(
      catchError((error) => {
        console.error('Error fetching houses:', error);
        return throwError(() => new Error('Failed to fetch houses'));
      })
    );
  }
} 