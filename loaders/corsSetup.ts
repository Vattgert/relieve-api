import { Express } from 'express';
import cors from 'cors';

const corsOptions = {
	origin: [
		'http://localhost:8080', 
		'http://relieve.com:8080',
		'http://localhost:8000', 
		'http://relieve.com:8000'
	]
};

function setupCors(app: Express): void{	
	app.use(cors(corsOptions));
}

export { setupCors };