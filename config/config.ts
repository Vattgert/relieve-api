const env = process.env.NODE_ENV;

const dev = {
	app: {
		port: parseInt(process.env.APP_PORT) || 3000
	},
	db: {
		host: process.env.DB_DEV_HOST || 'localhost',
		port: parseInt(process.env.DB_DEV_PORT) || 5432,
		username: process.env.DB_DEV_USER,
		password: process.env.DB_DEV_PASSWORD,
		database: process.env.DB_DEV_NAME
	}
};

const config = { dev };

export default config[env];