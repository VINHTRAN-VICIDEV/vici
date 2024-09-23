import {
  Equal,
  In,
  IsNull,
  LessThan,
  LessThanOrEqual,
  Like,
  MoreThan,
  MoreThanOrEqual,
  Not,
} from 'typeorm';

export function buildTypeORMQuery(filters) {
  const query = {};
  for (const field in filters) {
    const condition = filters[field];
    if (condition.gt !== undefined) query[field] = MoreThan(condition.gt);
    if (condition.gte !== undefined)
      query[field] = MoreThanOrEqual(condition.gte);
    if (condition.lt !== undefined) query[field] = LessThan(condition.lt);
    if (condition.lte !== undefined)
      query[field] = LessThanOrEqual(condition.lte);
    if (condition.eq !== undefined) query[field] = Equal(condition.eq);
    if (condition.neq !== undefined) query[field] = Not(condition.neq);
    if (condition.like !== undefined)
      query[field] = Like(`%${condition.like}%`);
    if (condition.in !== undefined) query[field] = In(condition.in);
    if (condition.nin !== undefined) query[field] = Not(In(condition.nin));
    if (condition.isNull === true) query[field] = IsNull();
    if (condition.isNotNull === true) query[field] = Not(IsNull());
  }
  return query;
}
