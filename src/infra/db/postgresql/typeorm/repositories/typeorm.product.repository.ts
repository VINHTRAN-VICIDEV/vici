import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product as TypeOrmProduct } from '../entites/typeorm.product.entity';
import { TypeOrmBaseRepositoryAbstract } from './typeorm.generic.repository';
import { QueryFilter } from 'src/application/ecommerce/interfaces/query-function';
import { buildTypeORMQuery } from '../helpers/build-typeorm-query';

export class TypeOrmProductRepository extends TypeOrmBaseRepositoryAbstract<TypeOrmProduct> {
  constructor(
    @InjectRepository(TypeOrmProduct)
    private _productRepository: Repository<TypeOrmProduct>,
  ) {
    super(_productRepository);
  }
  async findByCondition(
    condition?: QueryFilter,
    projection?: object,
  ): Promise<any[]> {
    return this._productRepository.find({
      select: projection,
      where: buildTypeORMQuery(condition),
    });
  }
}
