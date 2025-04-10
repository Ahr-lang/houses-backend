import { PostgresService } from '../../../postgress/postgresService';
import { House } from '../../types/db/house';

export class HouseController {
    private dbService: PostgresService;

    constructor(dbService: PostgresService) {
        this.dbService = dbService;
    }

    sum(a: number, b: number): number {
        return a + b;
    }

    async getHouses(type?: string, minPrice?: number, maxPrice?: number): Promise<House[]> {
        return this.dbService.getHouses(type, minPrice, maxPrice);
    }

    async getHouseById(id: number): Promise<House | null> {
        const houses = await this.dbService.getHouseById(id);
        return houses.length > 0 ? houses[0] : null;
    }
}