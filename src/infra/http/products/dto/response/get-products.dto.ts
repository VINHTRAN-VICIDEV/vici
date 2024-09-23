import { Expose } from 'class-transformer';

export class getProductsResponseDto {
  @Expose()
  id: string;
  @Expose()
  name: string;
  @Expose()
  price: number;
  @Expose()
  amount: number;
  @Expose()
  created_at: Date;
  @Expose()
  updated_at: Date;
}
