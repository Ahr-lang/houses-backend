import { Pool } from 'pg';
import { House } from '../../types/db/house';
import { DatabaseService } from '../../types/db/databaseService';

export class PostgresService implements DatabaseService {
    private db: Pool;

    constructor(connectionString: string) {
        this.db = new Pool({ connectionString });
    }

    async getHouses(type?: string, minPrice?: number, maxPrice?: number): Promise<House[]> {
        const query = `
            SELECT * FROM house
            WHERE ($1::text IS NULL OR tipo = $1)
            AND ($2::numeric IS NULL OR price >= $2)
            AND ($3::numeric IS NULL OR price <= $3)
        `;
        const result = await this.db.query(query, [type, minPrice, maxPrice]);
        return result.rows;
    }

    async getHouseById(id: number): Promise<House | null> {
        const query = 'SELECT * FROM house WHERE id = $1';
        const result = await this.db.query(query, [id]);
        return result.rows[0] || null;
    }
}