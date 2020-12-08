import { createConnection } from "typeorm";
import { Activity, Host, Customer, Tag, Vote, Like } from '../models';

(async () => {
    try{
        const connection = await createConnection({
            type: "postgres",
            host: process.env.DB_LOCAL_HOST,
            port: 5432,
            username: process.env.DB_LOCAL_USER,
            password: process.env.DB_LOCAL_PASS,
            database: process.env.DB_LOCAL_NAME,
            entities: [
                Activity, Host, Customer, Tag, Vote, Like
            ],
            logging: ["query", "error"]
        })
        
        const query = await connection.query("select 1;");
        console.log(query);
    } catch(error){
        console.error(error);
    }
})()