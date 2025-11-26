import * as dotenv from 'dotenv';
import * as packageFile from '../../package.json';
dotenv.config();

export default () => ({
  APP_VERSION: packageFile.version || '1.0.0',
  app_url: process.env.APP_URL || 'http://localhost:3300',
  app_secret_key: process.env.APP_SECRET_KEY || 'app_key',
  database: {
    type: process.env.DB_TYPE || 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'root',
    pass: process.env.DB_PASS || 'password',
    name: process.env.DB_NAME || 'jobs_api_server',
    sync: Boolean(process.env.DB_SYNC) || false,
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT) || 6379,
    user: process.env.REDIS_USER || 'default',
    pass: process.env.REDIS_PASS ||'password',
    db: Number(process.env.REDIS_DB) || 0,
  },
});
