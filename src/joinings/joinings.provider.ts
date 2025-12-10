import { DataSource } from "typeorm";
import { Joining } from "./entities/joining.entity";

export const joiningsProviders = [
    {
        provide: 'JOINING_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Joining),
        inject: ['DATA_SOURCE'],
    },
];