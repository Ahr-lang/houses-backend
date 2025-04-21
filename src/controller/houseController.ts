import { DatabaseService } from '../../types/db/databaseService';
import { House } from '../../types/db/house';

export class HouseController {
    private dbService: DatabaseService;

    constructor(dbService: DatabaseService) {
        this.dbService = dbService;
    }

    async getHouses(type?: string, minPrice?: number, maxPrice?: number): Promise<House[]> {
        return this.dbService.getHouses(type, minPrice, maxPrice);
    }

    async getHouseById(id: number): Promise<House | null> {
        return this.dbService.getHouseById(id);
    }
}