import { Expose } from 'class-transformer';

export class UserResponseDto {
  @Expose()
  first_name: string;
  @Expose()
  last_name: string;
  @Expose()
  username: string;
  @Expose()
  address: string;
  @Expose()
  phone_number: string;
}
