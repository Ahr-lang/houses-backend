import { House } from './house';

export interface DatabaseService {
    getHouses(type?: string, minPrice?: number, maxPrice?: number): Promise<House[]>;
    getHouseById(id: number): Promise<House | House[]>;
}