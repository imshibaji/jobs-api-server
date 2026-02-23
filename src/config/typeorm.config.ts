import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { config } from 'dotenv';

config();

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASS, // Ensure this isn't undefined
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  factories: [__dirname + '/../database/factories/**/*{.ts,.js}'],
  seeds: [__dirname + '/../database/seeds/**/*{.ts,.js}'],
};

export const dataSource = new DataSource(options);
