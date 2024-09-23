export interface QueryCondition<T> {
  eq?: T; // Equal to
  neq?: T; // Not equal to
  gt?: T; // Greater than
  gte?: T; // Greater than or equal to
  lt?: T; // Less than
  lte?: T; // Less than or equal to
  like?: string; // Like (for strings, partial match)
  in?: T[]; // In a list of values
  nin?: T[]; // Not in a list of values
  isNull?: boolean; // Is null
  isNotNull?: boolean; // Is not null
}

export interface QueryFilter {
  [field: string]: QueryCondition<any>; // Field name mapped to conditions
}
