import { Test } from '@nestjs/testing';
import {
  CreateProductsUseCase,
  CreateProductUseCaseCommand,
} from './create-product';
import { getModelToken } from '@nestjs/mongoose';
import { Product } from 'src/infra/db/mongodb/mongoose/entities/mongoose.product.entity';
import { ProductRepository } from '../../repository/product.interface.repository';

describe('CreateProductUseCase', () => {
  let createProductUseCase;
  let productRepository;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CreateProductsUseCase,
        {
          provide: ProductRepository,
          useValue: {
            base: {
              create: jest.fn(),
            },
          },
        },
        { provide: getModelToken(Product.name), useValue: {} },
      ],
    }).compile();

    createProductUseCase = moduleRef.get<CreateProductsUseCase>(
      CreateProductsUseCase,
    );
    productRepository = moduleRef.get<ProductRepository>(ProductRepository);
  });

  it('should be defined', () => {
    expect(createProductUseCase).toBeDefined();
    expect(productRepository).toBeDefined();
  });

  it('should create a product', async () => {
    const sellerId = '1234';
    const product: CreateProductUseCaseCommand = {
      name: 'testing product',
      price: 200,
      amount: 200,
    };

    (productRepository.base.create as jest.Mock).mockResolvedValue(product);
    const result = await createProductUseCase.execute(product, sellerId);
    expect(result).toEqual(product);

    expect(productRepository.base.create).toHaveBeenCalledWith({
      ...product,
      seller: sellerId,
    });
  });
});
