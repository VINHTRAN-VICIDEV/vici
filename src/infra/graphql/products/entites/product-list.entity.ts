import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductEntity } from './product.entity';

@ObjectType()
export class ProductList {
  @Field(() => [ProductEntity])
  items: ProductEntity[];

  @Field(() => Int)
  count: number;
}
