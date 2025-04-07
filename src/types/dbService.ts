import {House} from '../../types/db/house';

export interface IDBService { 
    getHouses(tipo:string,minprice:number,maxprice:number): Promise<House[]>;
    getHouseById(id: number): Promise<House>;
}