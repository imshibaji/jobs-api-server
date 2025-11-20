import { DataSource } from "typeorm";
import { Application } from "./application.entity";

export const applicationProviders = [
    {
        provide: 'APPLICATION_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Application),
        inject: ['PG_DATA_SOURCE'],
    },
];