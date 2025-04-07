import { HouseController } from "../controller/houseController";

export class HouseHandler { 
    const ctrl = new HouseController(new FakeService());
}