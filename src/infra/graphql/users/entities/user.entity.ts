import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserEntity {
  @Field(() => ID)
  id?: string;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  username: string;

  @Field()
  password_hash: string;

  @Field({ nullable: true })
  phone_number?: string;

  @Field({ nullable: true })
  address?: string;

  @Field()
  role: string;

  @Field({ nullable: true })
  created_at?: Date;

  @Field({ nullable: true })
  updated_at?: Date;
}
