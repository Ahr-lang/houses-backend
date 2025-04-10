import { House } from '../../types/db/house';
import { DatabaseService } from '../../types/db/databaseService';

const FAKE_HOUSES: House[] = [
    {
        id: 0,
        price: 10000,
        ubicacion: "El Cercado 670, Monterrey, Nuevo León",
        descripcion: "Casa de dos pisos con jardín y cochera para dos autos.",
        tipo: "Venta",
        calificacion: 10,
        tamañom2: 210
    },
    {
        id: 1,
        price: 15000,
        ubicacion: "San Pedro 123, Monterrey, Nuevo León",
        descripcion: "Casa moderna con alberca y acabados de lujo.",
        tipo: "Renta",
        calificacion: 9,
        tamañom2: 300
    }
];

export class FakeService implements DatabaseService {
    async getHouses(tipo?: string, minprice?: number, maxprice?: number): Promise<House[]> {
        return FAKE_HOUSES.filter(house => {
            const matchesTipo = !tipo || house.tipo === tipo;
            const matchesMinPrice = !minprice || house.price >= minprice;
            const matchesMaxPrice = !maxprice || house.price <= maxprice;
            return matchesTipo && matchesMinPrice && matchesMaxPrice;
        });
    }

    async getHouseById(id: number): Promise<House | null> {
        return FAKE_HOUSES.find(house => house.id === id) || null;
    }
}