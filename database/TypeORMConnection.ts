import { createConnection } from "typeorm";
import { Activity, Host, Customer } from '../models';

createConnection({
    type: "postgres",
    host: process.env.DB_LOCAL_HOST,
    port: 5432,
    username: process.env.DB_LOCAL_USER,
    password: process.env.DB_LOCAL_PASS,
    database: process.env.DB_LOCAL_NAME,
    entities: [
        Activity, Host, Customer
    ],
    logging: ["query", "error"]
});