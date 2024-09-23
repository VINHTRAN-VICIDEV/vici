export function buildMongooseQuery(filters) {
  const query = {};
  for (const field in filters) {
    const condition = filters[field];
    if (condition.gt !== undefined) query[field] = { $gt: condition.gt };
    if (condition.gte !== undefined) query[field] = { $gte: condition.gte };
    if (condition.lt !== undefined) query[field] = { $lt: condition.lt };
    if (condition.lte !== undefined) query[field] = { $lte: condition.lte };
    if (condition.eq !== undefined) query[field] = condition.eq;
    if (condition.neq !== undefined) query[field] = { $ne: condition.neq };
    if (condition.like !== undefined)
      query[field] = { $regex: condition.like, $options: 'i' };
    if (condition.in !== undefined) query[field] = { $in: condition.in };
    if (condition.nin !== undefined) query[field] = { $nin: condition.nin };
    if (condition.isNull === true) query[field] = { $exists: false };
    if (condition.isNotNull === true) query[field] = { $exists: true };
  }
  return query;
}
