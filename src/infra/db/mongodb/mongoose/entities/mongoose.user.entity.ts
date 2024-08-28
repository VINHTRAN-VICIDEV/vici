import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Role } from 'src/core/entities/user.entity';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  role: Role;

  @Prop({ type: Date, default: null })
  deletedAt: Date;

  timestamps: { createdAt: 'created_at'; updatedAt: 'updated_at' };
}

const UserSchema = SchemaFactory.createForClass(User);

export { UserSchema };
