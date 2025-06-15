import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HousesListComponent } from './pages/houses-list/houses-list.component';
import { HouseDetailComponent } from './pages/house-detail/house-detail.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'houses', component: HousesListComponent },
    { path: 'houses/:id', component: HouseDetailComponent },
    { path: 'favorites', component: FavoritesComponent },
  ];
  
