import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as HousesActions from './houses.actions';
import { HousesService } from '../services/houses.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class HousesEffects {
  loadHouses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HousesActions.loadHouses),
      switchMap(({ page, size }) =>
        this.housesService.getHouses(page, size).pipe(
          map(houses => HousesActions.loadHousesSuccess({ houses })),
          catchError(error => of(HousesActions.loadHousesFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private housesService: HousesService) {}
}