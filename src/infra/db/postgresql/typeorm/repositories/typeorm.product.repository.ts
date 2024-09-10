import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product as TypeOrmProduct } from '../entites/typeorm.product.entity';
import { TypeOrmBaseRepositoryAbstract } from './typeorm.generic.repository';

export class TypeOrmProductRepository extends TypeOrmBaseRepositoryAbstract<TypeOrmProduct> {
  constructor(
    @InjectRepository(TypeOrmProduct)
    private _productRepository: Repository<TypeOrmProduct>,
  ) {
    super(_productRepository);
  }
}
