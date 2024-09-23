import { BaseEntity } from './base.entity';
import { User } from './user.entity';

enum NotificationType {
  SYSTEM = 'system',
  AD = 'ad',
  TRANSACTION = 'transaction',
  ANNOUNCEMENT = 'announcement',
}
export class Notification extends BaseEntity {
  owner: User;

  type: NotificationType;

  read: boolean;
}
