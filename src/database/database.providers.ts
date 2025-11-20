
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'jobs_for_women',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: true,
});


const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "168.231.121.55",
    port: 5432,
    username: "shibaji",
    password: "Sdnsdn@1",
    database: "jobs_for_woman",
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: true,
});

const mongoDataSource = new DataSource({
    type: "mongodb",
    host: "168.231.121.55",
    port: 27017,
    username: "shibaji",
    password: "Sdnsdn@1",
    database: "jobs_for_woman",
    authSource: "admin",
    entities: [
        // __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: true,
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return await dataSource.initialize();
    },
  },
  {
    provide: 'PG_DATA_SOURCE',
    useFactory: async () => {
      return await PostgresDataSource.initialize();
    },
  },
  {
    provide: 'MONGO_DATA_SOURCE',
    useFactory: async () => {
      return await mongoDataSource.initialize();
    },
  },
];
