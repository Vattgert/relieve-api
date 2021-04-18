import { createConnection, getConnection } from 'typeorm';
import { Activity, Host, Customer, Tag, Vote, Like } from '../models';

const createTypeORMConnection = async (databaseConfig) => {
	try{
		await createConnection({
			type: 'postgres',
			...databaseConfig,
			entities: [
				Activity, Host, Customer, Tag, Vote, Like
			],
			logging: ['query', 'error']
		});
	} catch(error){
		console.error(error);
	}
};

const connection = {

	async create(databaseConfig: Record<string, any>): Promise<void>{
		await createTypeORMConnection(databaseConfig);
	},

	async close(): Promise<void>{
		await getConnection().close(); 
	},
};

export default connection;