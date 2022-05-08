export const isFunction = (value: any): value is Function => {
  return typeof value === 'function';
};

export const isArray = <T = any>(value: any): value is Array<T> => {
  return value instanceof Array
};
