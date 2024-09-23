import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Tag } from './typeorm.tag.entity';
import { TypeOrmBaseEntity } from './typeorm.base.entity';

@Entity()
export class Product extends TypeOrmBaseEntity {
  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  amount: number;

  @ManyToMany(() => Tag, { cascade: true })
  @JoinTable()
  tags: Tag[];
}
