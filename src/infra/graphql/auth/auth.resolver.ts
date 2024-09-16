import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginPayload } from './dto/login.response.dto';
import { LoginInput } from './dto/login.request.dto';
import { Public } from 'src/shared/decorators/auth.decorator';
import { AuthService } from 'src/infra/http/auth/auth.service';

@Public()
@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginPayload)
  login(@Args('loginData') loginData: LoginInput): Promise<LoginPayload> {
    return this.authService.signIn(loginData.username, loginData.password);
  }
}
