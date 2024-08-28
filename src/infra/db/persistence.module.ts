import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from './mongodb/mongoose/mongoose.module';
interface DatabaseOptions {
  type: 'prisma' | 'mongoose' | 'typeorm';
  global?: boolean;
}
@Module({})
export class PersistenceModule {
  static async register({
    global = false,
    type,
  }: DatabaseOptions): Promise<DynamicModule> {
    return {
      global,
      module: PersistenceModule,
      imports: [type === 'mongoose' ? MongooseModule : MongooseModule],
      exports: [type === 'mongoose' ? MongooseModule : MongooseModule],
    };
  }
}
