import { Args, ArgsType, Field, Query, Resolver } from '@nestjs/graphql';
import { UserEntity } from './entities/user.entity';
import { Public } from 'src/shared/decorators/auth.decorator';
import { UserListEntity } from './entities/list-users.entity';
import { GetUsersUseCase } from 'src/application/ecommerce/use-cases/user/get-users';
import { FindAllResponse } from 'src/types/common.type';

@ArgsType()
class GetUserArg {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  // @Length(6, 20)
  username: string;
}

@Resolver()
export class UserResolver {
  constructor(private getUsersUseCase: GetUsersUseCase) {}

  @Public()
  @Query(() => UserListEntity)
  users(): Promise<FindAllResponse<UserEntity>> {
    return this.getUsersUseCase.execute({});
  }
  @Public()
  @Query(() => UserEntity, { nullable: true })
  user(@Args() args: GetUserArg) {
    console.log(args);
  }
}
