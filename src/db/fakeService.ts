const FAKE_HOUSES = [
    {
        id:0,
        price:10000,
        ubicacion:"El Cercado 670, Monterrey, Nuevo León",
        descripcion:"Casa de dos pisos con jardín y cochera para dos autos.",
        tipo:"Venta",
        calificacion:10,
        tamañom2:210
    },
    {
        id:0,
        price:10000,
        ubicacion:"El Cercado 670, Monterrey, Nuevo León",
        descripcion:"Casa de dos pisos con jardín y cochera para dos autos.",
        tipo:"Venta",
        calificacion:10,
        tamañom2:210
    }
]

class FakeService {
    async getHouses(tipo:string,minprice:number,maxprice:number): Promise<House[]> {
        return FAKE_HOUSES;

    }

    async getHouseById(id: number): Promise<House> {
        return FAKE_HOUSES[id];
    }
}