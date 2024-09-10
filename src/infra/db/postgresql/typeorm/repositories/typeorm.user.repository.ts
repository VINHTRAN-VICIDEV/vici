import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User as TypeOrmUser } from '../entites/typeorm.user.entity';
import { TypeOrmBaseRepositoryAbstract } from './typeorm.generic.repository';

export class TypeOrmUserRepository extends TypeOrmBaseRepositoryAbstract<TypeOrmUser> {
  constructor(
    @InjectRepository(TypeOrmUser)
    private _userRepository: Repository<TypeOrmUser>,
  ) {
    super(_userRepository);
  }
}
