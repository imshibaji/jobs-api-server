import { DataSource, DataSourceOptions } from 'typeorm';
import config from 'src/config/configuration';


export const dataSource = new DataSource({
    type: config().database.type,
    host: config().database.host,
    port: config().database.port,
    username: config().database.user,
    password: config().database.pass,
    database: config().database.name,
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
