import { User } from './user.entity';

export class Product {
  _id?: string;
  name: string;
  price: number;
  seller: User;
  amount: number;
}
