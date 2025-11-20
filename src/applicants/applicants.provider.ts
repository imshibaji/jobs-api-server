import { DataSource } from "typeorm";
import { Applicant } from "./applicant.entity";

export const applicantProviders = [
  {
    provide: 'APPLICANT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Applicant),
    inject: ['PG_DATA_SOURCE'],
  },
];
