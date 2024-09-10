import { User as TypeOrmUser } from '../entites/typeorm.user.entity';
import { User } from 'src/core/entities/user.entity';
export class TypeOrmUserMapper {
  static toDomain(entity: TypeOrmUser): User {
    const model = new User({
      id: entity.id,
      first_name: entity.first_name,
      last_name: entity.last_name,
      username: entity.username,
      password_hash: entity.password_hash,
      phone_number: entity.phone_number,
      address: entity.address,
      role: entity.role,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
    });
    return model;
  }
  static toTypeOrm(entity: User): TypeOrmUser {
    const user = new TypeOrmUser();
    user.id = entity.id;
    user.first_name = entity.first_name;
    user.last_name = entity.last_name;
    user.username = entity.username;
    user.password_hash = entity.password_hash;
    user.phone_number = entity.phone_number;
    user.address = entity.address;
    user.role = entity.role;
    user.deleted_at = entity.deleted_at;
    return user;
  }
  static toCreateTypeOrm(entity: User): TypeOrmUser {
    const user = new TypeOrmUser();
    user.first_name = entity.first_name;
    user.last_name = entity.last_name;
    user.username = entity.username;
    user.password_hash = entity.password_hash;
    user.phone_number = entity.phone_number;
    user.address = entity.address;
    user.role = entity.role;
    return user;
  }
}
