import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface House {
  url: string;
  name: string;
  // Add other house properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  private apiUrl = 'http://localhost:4000/houses';

  constructor(private http: HttpClient) {}

  getHouses(page: number, pageSize: number): Observable<House[]> {
    return this.http.get<House[]>(`${this.apiUrl}?page=${page}&pageSize=${pageSize}`).pipe(
      catchError((error) => {
        console.error('Error fetching houses:', error);
        return throwError(() => new Error('Failed to fetch houses'));
      })
    );
  }
} 