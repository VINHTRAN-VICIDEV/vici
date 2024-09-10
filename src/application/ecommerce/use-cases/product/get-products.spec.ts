import { Test } from '@nestjs/testing';
import { GetProductsUseCase } from './get-products';
import { getModelToken } from '@nestjs/mongoose';
import { Product } from 'src/infra/db/mongodb/mongoose/entities/mongoose.product.entity';
import { ProductRepositoryInterface } from '../../repository/product.interface.repository';

describe('GetProductUseCase', () => {
  let getProductsUseCase;
  let productRepository;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        GetProductsUseCase,
        {
          provide: ProductRepositoryInterface,
          useValue: {
            findAll: jest.fn(),
          },
        },
        { provide: getModelToken(Product.name), useValue: {} },
      ],
    }).compile();

    getProductsUseCase = moduleRef.get<GetProductsUseCase>(GetProductsUseCase);

    productRepository = moduleRef.get<ProductRepositoryInterface>(
      ProductRepositoryInterface,
    );
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
    (productRepository.findAll as jest.Mock).mockResolvedValue(products);
    const result = await getProductsUseCase.execute();

    expect(result).toEqual(products);
  });
});
