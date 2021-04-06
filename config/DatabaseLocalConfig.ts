const databaseLocalConfig = {
	host: process.env.DB_LOCAL_HOST,
	port: process.env.DB_LOCAL_PORT,
	user: process.env.DB_LOCAL_USER,
	password: process.env.DB_LOCAL_PASS,
	database: process.env.DB_LOCAL_NAME
};

export default databaseLocalConfig;