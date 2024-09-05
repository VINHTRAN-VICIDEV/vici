import { Test } from '@nestjs/testing';
import { GetProductsUseCase } from './get-products';
import { ProductRepository } from '../../repository/product.repository';
import { getModelToken } from '@nestjs/mongoose';
import { Product } from 'src/infra/db/mongodb/mongoose/entities/mongoose.product.entity';

describe('GetProductUseCase', () => {
  let getProductsUseCase;
  let productRepository;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        GetProductsUseCase,
        {
          provide: ProductRepository,
          useValue: {
            base: {
              getAll: jest.fn(),
            },
          },
        },
        { provide: getModelToken(Product.name), useValue: {} },
      ],
    }).compile();

    getProductsUseCase = moduleRef.get<GetProductsUseCase>(GetProductsUseCase);

    productRepository = moduleRef.get<ProductRepository>(ProductRepository);
  });
  it('should be defined', () => {
    expect(getProductsUseCase).toBeDefined();
    expect(productRepository).toBeDefined();
  });

  it('should return products list', async () => {
    const products = [
      {
        name: 'product 1',
        price: 100,
        amount: 100,
      },
      { name: 'product 2', price: 100, amount: 100 },
    ];
    (productRepository.base.getAll as jest.Mock).mockResolvedValue(products);
    const result = await getProductsUseCase.execute();

    expect(result).toEqual(products);
  });
});
