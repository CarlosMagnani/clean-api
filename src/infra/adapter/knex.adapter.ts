import Knex from "knex";
import type {Knex as KnexApplication} from 'knex';
import { KnexConfigurationInterface } from "../api/config/config.model";



export class KnexAdapter {
    private knexInstance: KnexApplication;
    
    constructor(dataBaseConnection: KnexConfigurationInterface){
        this.knexInstance = Knex(dataBaseConnection)
        this.knexInstance.raw('select 1+1 as result')
        .then(() =>{ console.info(`[KnexAdapter] Database connection with ${dataBaseConnection.connection.host}`)})
        .catch((error: unknown) =>{
            console.error(`[KnexAdapter] Database connection error with ${dataBaseConnection.connection.host}`, error);
            process.exit(1);
        });
    }

    getKnexInstance(): KnexApplication {
        return this.knexInstance
    }
}