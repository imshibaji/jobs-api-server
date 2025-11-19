import { DataSource } from "typeorm";
import { Article } from "./article.entity";


export const articlesProvider = [
    {
        provide: 'ARTICLE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Article),
        inject: ['DATA_SOURCE'],
    },
];