import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { CreateOrderUseCase } from 'src/application/ecommerce/use-cases/order/create-order';

@Module({
  controllers: [OrdersController],
  providers: [CreateOrderUseCase],
})
export class OrdersModule {}
