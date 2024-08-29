import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './mongoose.user.entity';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true, default: 0 })
  amount: number;

  @Prop({ type: Date, default: null })
  deletedAt: Date;

  timestamps: { createdAt: 'created_at'; updatedAt: 'updated_at' };

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  seller: User;
}

const ProductSchema = SchemaFactory.createForClass(Product);

export { ProductSchema };
