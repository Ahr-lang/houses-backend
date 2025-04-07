export class HouseController {

    dbService: FakeService
    
    constructor(){
        this.dbService = new FakeService();
    }

    async getHousesByType(tipo:string,minprice:number,maxprice:number): House[]{
       const dbService = new FakeService();
       const houses = this.dbService.getHouses(tipo,minprice,maxprice)
       return houses
    }
}