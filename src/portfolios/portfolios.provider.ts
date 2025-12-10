import { DataSource } from "typeorm";
import { Portfolio } from "./entities/portfolio.entity";

export const portfoliosProvider = [
    {
        provide: 'PORTFOLIO_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Portfolio),
        inject: ['DATA_SOURCE'],
    },
];