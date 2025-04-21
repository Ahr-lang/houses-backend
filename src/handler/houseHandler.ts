import { HouseController } from "../controller/houseController";
import { FakeService } from "../db/fakeService";

export class HouseHandler {
    private ctrl: HouseController;

    constructor() {
        this.ctrl = new HouseController(new FakeService());
    }

    async getHouses(type?: string, minPrice?: number, maxPrice?: number) {
        return this.ctrl.getHouses(type, minPrice, maxPrice);
    }

    async getHouseById(id: number) {
        return this.ctrl.getHouseById(id);
    }
}