import { Role } from 'src/core/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TypeOrmBaseEntity } from './typeorm.base.entity';

@Entity()
export class User extends TypeOrmBaseEntity {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  username: string;

  @Column()
  password_hash: string;

  @Column()
  phone_number: string;

  @Column()
  address: string;

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: string;
}
