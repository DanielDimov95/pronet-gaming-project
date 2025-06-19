import { createReducer, on } from '@ngrx/store';
import * as HousesActions from './houses.actions';
import { HouseCardModel } from '../models/house-card';

export interface HousesState {
  houses: HouseCardModel[];
  loading: boolean;
  error: any;
}

export const initialState: HousesState = {
  houses: [],
  loading: false,
  error: null,
};

export const housesReducer = createReducer(
  initialState,
  on(HousesActions.loadHouses, state => ({ ...state, loading: true })),
  on(HousesActions.loadHousesSuccess, (state, { houses }) => ({
    ...state,
    houses,
    loading: false,
    error: null,
  })),
  on(HousesActions.loadHousesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);