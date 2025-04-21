import { beforeEach } from '@jest/globals';
import { jest } from '@jest/globals';
import { HouseController } from '../src/controller/houseController';
import { House } from '../types/db/house';

describe('HouseController', () => {
    let houseController: HouseController;
    let mockDBService: any;

    beforeEach(() => {
        mockDBService = {
            getHouses: jest.fn(),
            getHouseById: jest.fn(),
        };
        houseController = new HouseController(mockDBService);
    });

    test('Should fetch all houses when no filters are provided', async () => {
        const mockHouses: House[] = [
            { 
                id: 1, 
                price: 10000, 
                tipo: 'Venta',
                ubicacion: 'Test Location 1',
                descripcion: 'Test Description 1',
                calificacion: 9,
                tamañom2: 200
            },
            { 
                id: 2, 
                price: 15000, 
                tipo: 'Renta',
                ubicacion: 'Test Location 2',
                descripcion: 'Test Description 2',
                calificacion: 8,
                tamañom2: 150
            }
        ];
        mockDBService.getHouses.mockResolvedValue(mockHouses);

        const result = await houseController.getHouses();
        expect(result).toEqual(mockHouses);
        expect(mockDBService.getHouses).toHaveBeenCalledWith(undefined, undefined, undefined);
    });

    test('Should fetch houses with filters', async () => {
        const mockHouses: House[] = [
            { 
                id: 1, 
                price: 10000, 
                tipo: 'Venta',
                ubicacion: 'Test Location 1',
                descripcion: 'Test Description 1',
                calificacion: 9,
                tamañom2: 200
            }
        ];
        mockDBService.getHouses.mockResolvedValue(mockHouses);

        const result = await houseController.getHouses('Venta', 5000, 12000);
        expect(result).toEqual(mockHouses);
        expect(mockDBService.getHouses).toHaveBeenCalledWith('Venta', 5000, 12000);
    });

    test('Should fetch a house by ID', async () => {
        const mockHouse: House = { 
            id: 1, 
            price: 10000, 
            tipo: 'Venta',
            ubicacion: 'Test Location 1',
            descripcion: 'Test Description 1',
            calificacion: 9,
            tamañom2: 200
        };
        mockDBService.getHouseById.mockResolvedValue(mockHouse);

        const result = await houseController.getHouseById(1);
        expect(result).toEqual(mockHouse);
        expect(mockDBService.getHouseById).toHaveBeenCalledWith(1);
    });

    test('Should return null when house is not found', async () => {
        mockDBService.getHouseById.mockResolvedValue(null);

        const result = await houseController.getHouseById(999);
        expect(result).toBeNull();
        expect(mockDBService.getHouseById).toHaveBeenCalledWith(999);
    });
});