import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from 'src/core/entities/user.entity';
import { BaseEntity } from './mongoose.base.entity';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class User extends BaseEntity {
  @Prop({ required: true })
  first_name: string;

  @Prop()
  last_name: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password_hash: string;

  @Prop()
  address: string;

  @Prop()
  phone_number: string;

  @Prop({ required: true, enum: Role })
  role: string;
}

const UserSchema = SchemaFactory.createForClass(User);

export { UserSchema };
