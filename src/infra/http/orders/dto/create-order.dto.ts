import { ApiProperty } from '@nestjs/swagger';

class OrderItem {
  @ApiProperty()
  product_id: string;

  @ApiProperty()
  amount: number;
}

export class CreateOrderDto {
  @ApiProperty()
  items: OrderItem[];
}
