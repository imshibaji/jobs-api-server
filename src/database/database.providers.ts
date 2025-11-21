
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSource = new DataSource({
    type: process.env.DB_TYPE ?? 'mysql',
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT) ?? 3306,
    username: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASS ?? 'password',
    database: process.env.DB_NAME ?? 'jobs_for_women',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: true,
} as DataSourceOptions);

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return await dataSource.initialize();
    },
  }
];
