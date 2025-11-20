import { DataSource } from "typeorm";
import { Channel } from "./channel.entity";


export const channelsProvider = [
    {
        provide: 'CHANNEL_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Channel),
        inject: ['PG_DATA_SOURCE'],
    },
];