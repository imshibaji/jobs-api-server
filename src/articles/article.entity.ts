import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('articles')
export class Article {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    title: string;

    @Column({ unique: true })
    slug: string;

    @Column()
    content: string;

    @Column()
    image: string;

    @Column()
    summary: string;

    @Column({ type: 'simple-array' })
    tags: string[];

    @Column({ name: 'user_id' })
    userId: number;

    @Column({ name: 'type', default: 'post' })
    type: string;

    @Column({ name: 'is_published', default: false })
    isPublished: boolean;

    @Column({ name: 'is_archived', default: false })
    isArchived: boolean;

    @Column({ name: 'is_deleted', default: false })
    isDeleted: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    publishedAt?: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt?: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt?: Date;
}