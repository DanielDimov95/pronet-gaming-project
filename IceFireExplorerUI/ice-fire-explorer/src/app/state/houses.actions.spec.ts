import * as HousesActions from './houses.actions';
import { HouseCardModel } from '../models/house-card';

describe('Houses Actions', () => {
  const mockHouse: HouseCardModel = {
    url: 'house/1',
    name: 'House Stark',
    region: 'The North',
    coatOfArms: 'Direwolf'
  };

  it('should create loadHouses action', () => {
    const action = HousesActions.loadHouses({ page: 1, size: 10 });
    expect(action.type).toBe('[Houses] Load');
    expect(action.page).toBe(1);
    expect(action.size).toBe(10);
  });

  it('should create loadHousesSuccess action', () => {
    const houses = [mockHouse];
    const action = HousesActions.loadHousesSuccess({ houses });
    expect(action.type).toBe('[Houses] Load Success');
    expect(action.houses).toEqual(houses);
  });

  it('should create loadHousesFailure action', () => {
    const error = 'Failed to load houses';
    const action = HousesActions.loadHousesFailure({ error });
    expect(action.type).toBe('[Houses] Load Failure');
    expect(action.error).toBe(error);
  });
}); 