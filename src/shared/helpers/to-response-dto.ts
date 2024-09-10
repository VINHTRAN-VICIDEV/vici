import { plainToInstance } from 'class-transformer';

export function toResponseDto<T>(dto: new () => T, entity: object): any {
  return plainToInstance(dto, entity, { excludeExtraneousValues: true });
}

export function toFindAllResponseDto<T>(dto: new () => T, entity: object): any {
  const items = plainToInstance(dto, entity['items'], {
    excludeExtraneousValues: true,
  });
  entity['items'] = items;
  return entity;
}
