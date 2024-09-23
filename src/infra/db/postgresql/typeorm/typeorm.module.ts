import { Module } from '@nestjs/common';
import { TypeOrmModule as TypeOrmModuleLib } from '@nestjs/typeorm';
import { User } from './entites/typeorm.user.entity';
import { TypeOrmUserRepository } from './repositories/typeorm.user.repository';
import { UserRepositoryInterface } from 'src/application/ecommerce/repository/user.interface.repository';
import { TypeOrmProductRepository } from './repositories/typeorm.product.repository';
import { ProductRepositoryInterface } from 'src/application/ecommerce/repository/product.interface.repository';
import { Product } from './entites/typeorm.product.entity';
import { Tag } from './entites/typeorm.tag.entity';
@Module({
  imports: [
    TypeOrmModuleLib.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mydbpostgres',
      database: 'postgres',
      entities: [User, Product, Tag],
      synchronize: true,
    }),
    TypeOrmModuleLib.forFeature([User, Product, Tag]),
  ],
  providers: [
    { provide: UserRepositoryInterface, useClass: TypeOrmUserRepository },
    { provide: ProductRepositoryInterface, useClass: TypeOrmProductRepository },
  ],
  exports: [UserRepositoryInterface, ProductRepositoryInterface],
})
export class TypeOrmModule {}
