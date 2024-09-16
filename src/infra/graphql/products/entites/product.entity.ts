import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductEntity {
  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  // @Field(() => User)
  // owner: User;

  @Field(() => Float)
  amount: number;
}
