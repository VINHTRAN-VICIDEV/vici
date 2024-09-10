import { User as TypeOrmUser } from '../entites/typeorm.user.entity';
import { User } from 'src/core/entities/user.entity';
export class TypeOrmUserMapper {
  static toDomain(entity: TypeOrmUser): User {
    const model = new User({
      id: entity.id,
      first_name: entity.firstName,
      last_name: entity.lastName,
      username: entity.username,
      password_hash: entity.passwordHash,
      phone_number: entity.phoneNumber,
      address: entity.address,
      role: entity.role,
      created_at: entity.createdAt,
      updated_at: entity.updatedAt,
      deleted_at: entity.deletedAt,
    });
    return model;
  }
  static toTypeOrm(entity: User): TypeOrmUser {
    const user = new TypeOrmUser();
    user.id = entity.id;
    user.firstName = entity.first_name;
    user.lastName = entity.last_name;
    user.username = entity.username;
    user.passwordHash = entity.password_hash;
    user.phoneNumber = entity.phone_number;
    user.address = entity.address;
    user.role = entity.role;
    user.deletedAt = entity.deleted_at;
    return user;
  }
  static toCreateTypeOrm(entity: User): TypeOrmUser {
    const user = new TypeOrmUser();
    user.firstName = entity.first_name;
    user.lastName = entity.last_name;
    user.username = entity.username;
    user.passwordHash = entity.password_hash;
    user.phoneNumber = entity.phone_number;
    user.address = entity.address;
    user.role = entity.role;
    return user;
  }
}
