import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export class BaseEntity {
  id?: mongoose.Schema.Types.ObjectId;
  @Prop({ default: null })
  deleted_at: Date; // Dùng cho soft delete
}
