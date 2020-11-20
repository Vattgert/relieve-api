import { Pool } from "pg";

const databaseLocalConfig = {
    host: process.env.DB_LOCAL_HOST,
    port: process.env.DB_LOCAL_PORT,
    user: process.env.DB_LOCAL_USER,
    password: process.env.DB_LOCAL_PASS,
    database: process.env.DB_LOCAL_NAME
}

class PostgresConnection{
    #pool: Pool;

    constructor(config: object){
        this.#pool = new Pool(config);
    }

    getPool(): Pool{
        return this.#pool;
    }

}

export { databaseLocalConfig };
export { PostgresConnection };