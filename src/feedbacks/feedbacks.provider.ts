import { DataSource } from "typeorm";
import { Feedback } from "./entities/feedback.entity";

export const feedbacksProvider = [
    {
        provide: 'FEEDBACK_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Feedback),
        inject: ['DATA_SOURCE'],
    },
];