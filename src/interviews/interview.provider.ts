import { DataSource } from "typeorm";
import { Interview } from "./entities/interview.entity";

export const interviewProviders = [
    {
        provide: 'INTERVIEW_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Interview),
        inject: ['DATA_SOURCE'],
    },
];