import { Entity } from './init/entity';

export enum Role {
  User = 'user',
  Admin = 'admin',
}
export interface UserProps {
  _id?: string;
  firstName: string;
  lastName?: string;
  username: string;
  password: string;
  role: Role;
}

export class User extends Entity<UserProps> {
  constructor(props: UserProps) {
    super(props);
  }
  get id(): string {
    return this.props._id;
  }
  get data(): UserProps {
    return this.props;
  }

  get firstName(): string {
    return this.props.firstName;
  }
  set firstName(firstName: string) {
    this.props.firstName = firstName;
  }

  get lastName(): string {
    return this.props.lastName;
  }
  set lastName(lastName: string) {
    this.props.lastName = lastName;
  }

  get username(): string {
    return this.props.username;
  }
  set username(username: string) {
    this.props.username = username;
  }

  get password(): string {
    return this.props.password;
  }
  set password(password: string) {
    this.props.password = password;
  }

  get role(): Role {
    return this.props.role;
  }
  set role(role: Role) {
    this.props.role = role || Role.User;
  }
}
