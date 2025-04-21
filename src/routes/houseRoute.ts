import express from 'express';
import { PostgresService } from '../db/postgresService';
import { HouseController } from '../controller/houseController';

const router = express.Router();
const postgresService = new PostgresService(process.env.DATABASE_URL || '');
const houseController = new HouseController(postgresService);

router.get('/houses', async (req, res) => {
    try {
        const { type, minPrice, maxPrice } = req.query;
        const houses = await houseController.getHouses(
            type as string,
            Number(minPrice),
            Number(maxPrice)
        );
        res.status(200).json(houses);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.get('/houses/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const house = await houseController.getHouseById(Number(id));
        if (house) {
            res.status(200).json(house);
        } else {
            res.status(404).json({ message: 'House not found' });
        }
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default router;