import { CreateProductsUseCase } from 'src/application/ecommerce/use-cases/product/create-product';
import { ProductController } from './products.controller';
import { Test } from '@nestjs/testing';
import { GetProductsUseCase } from 'src/application/ecommerce/use-cases/product/get-products';
import { MongooseProductRepository } from 'src/infra/db/mongodb/mongoose/repositories/mongoose.product.repository';
import { ProductRepository } from 'src/application/ecommerce/repository/product.repository';
import { getModelToken } from '@nestjs/mongoose';
import { Product } from 'src/infra/db/mongodb/mongoose/entities/mongoose.product.entity';
describe('ProductsController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        CreateProductsUseCase,
        GetProductsUseCase,
        { provide: ProductRepository, useClass: MongooseProductRepository },
        {
          provide: getModelToken(Product.name),
          useValue: {},
        },
      ],
    }).compile();

    controller = moduleRef.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
