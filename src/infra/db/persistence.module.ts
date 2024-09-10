import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from './mongodb/mongoose/mongoose.module';
import { TypeOrmModule } from './postgresql/typeorm/typeorm.module';
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
    let DbModule;
    switch (type) {
      case 'mongoose': {
        DbModule = MongooseModule;
        break;
      }
      case 'typeorm': {
        DbModule = TypeOrmModule;
      }
    }
    console.log(DbModule);
    return {
      global,
      module: PersistenceModule,
      imports: [DbModule],
      exports: [DbModule],
    };
  }
}
