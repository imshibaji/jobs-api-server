import { DataSource } from "typeorm";
import { Company } from "./company.entity";


export const companiesProvider = [
    {
        provide: 'COMPANY_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Company),
        inject: ['DATA_SOURCE'],
    },
];