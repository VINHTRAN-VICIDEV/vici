import { BaseEntity } from './base.entity';
import { Entity } from './entity';

export enum Role {
  User = 'user',
  Admin = 'admin',
}

export class UserProps extends BaseEntity {
  id?: string;
  first_name: string;
  last_name: string;
  username: string;
  password_hash: string;
  phone_number?: string;
  address?: string;
  role: string;
  created_at?: Date;
  updated_at?: Date;
}

export class User extends Entity<UserProps> {
  constructor(props: UserProps) {
    super(props);
  }
  get id(): string {
    return this.props.id;
  }
  get first_name(): string {
    return this.props.first_name;
  }
  get last_name(): string {
    return this.props.last_name;
  }
  get username(): string {
    return this.props.username;
  }
  get password_hash(): string {
    return this.props.password_hash;
  }
  get phone_number(): string {
    return this.props.phone_number;
  }
  get address(): string {
    return this.props.address;
  }
  get role(): string {
    return this.props.role;
  }
  get createdAt(): Date {
    return this.props.created_at;
  }
  get updatedAt(): Date {
    return this.props.updated_at;
  }
  get deleted_at(): Date {
    return this.props.deleted_at;
  }
}
