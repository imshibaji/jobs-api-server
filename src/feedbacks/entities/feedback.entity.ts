import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('feedbacks')
export class Feedback {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'user_id', nullable: true })
  userId?: number;

  @Column({ name: 'table_name', nullable: true })
  tableName?: string;

  @Column({ name: 'table_id', nullable: true })
  tableId?: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ name: 'org_name', nullable: true })
  orgName?: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column({ nullable: false })
  rating: number;

  @Column({ nullable: false })
  comment: string;

  @Column({ name: 'status', nullable: true })
  status?: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: string;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: string;
}
