import * as dotenv from 'dotenv';
dotenv.config();

export default () => ({
  database: {
    type: process.env.DB_TYPE || 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'root',
    pass: process.env.DB_PASS || 'password',
    name: process.env.DB_NAME || 'jobs_for_women',
    sync: Boolean(process.env.DB_SYNC) || true,
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT) || 6379,
    user: process.env.REDIS_USER || 'default',
    pass: process.env.REDIS_PASS ||'password',
    db: Number(process.env.REDIS_DB) || 0,
  },
});
