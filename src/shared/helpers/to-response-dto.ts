import { plainToInstance } from 'class-transformer';

export function toResponseDto<T>(dto: new () => T, entity: object): any {
  return plainToInstance(dto, entity, { excludeExtraneousValues: true });
}
