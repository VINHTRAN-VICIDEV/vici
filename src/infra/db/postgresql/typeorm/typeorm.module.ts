import { Module } from '@nestjs/common';
import { TypeOrmModule as TypeOrmModuleLib } from '@nestjs/typeorm';
import { User } from './entites/typeorm.user.entity';
import { TypeOrmUserRepository } from './repositories/typeorm.user.repository';
import { UserRepositoryInterface } from 'src/application/ecommerce/repository/user.interface.repository';
@Module({
  imports: [
    TypeOrmModuleLib.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mydbpostgres',
      database: 'postgres',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModuleLib.forFeature([User]),
  ],
  providers: [
    { provide: UserRepositoryInterface, useClass: TypeOrmUserRepository },
    // { provide: ProductRepository, useValue: {} },
    TypeOrmUserRepository,
  ],
  exports: [UserRepositoryInterface, TypeOrmUserRepository],
})
export class TypeOrmModule {}
