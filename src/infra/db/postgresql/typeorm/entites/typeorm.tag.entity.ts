import { Column, Entity } from 'typeorm';
import { TypeOrmBaseEntity } from './typeorm.base.entity';

@Entity()
export class Tag extends TypeOrmBaseEntity {
  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;
}
