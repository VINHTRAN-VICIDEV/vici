import { BaseEntity } from 'typeorm';

export class Tag extends BaseEntity {
  title: string;

  descriptions: string;
}
