import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserEntity } from './user.entity';

@ObjectType()
export class UserListEntity {
  @Field(() => [UserEntity])
  items: UserEntity[];

  @Field(() => Int)
  count: number;
}
