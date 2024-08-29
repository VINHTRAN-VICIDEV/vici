import { Module } from '@nestjs/common';
import { ProductController } from './products.controller';
import { GetProductsUseCase } from 'src/application/ecommerce/use-cases/product/get-products';
import { CreateProductsUseCase } from 'src/application/ecommerce/use-cases/product/create-product';
import { RolesGuard } from 'src/shared/guards/roles.guard';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';

@Module({
  providers: [
    JwtService,
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    GetProductsUseCase,
    CreateProductsUseCase,
  ],
  controllers: [ProductController],
})
export class ProductModule {}
