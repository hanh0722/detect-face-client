export const classList = (...className: Array<any>) => {
  const filterClassName = className.filter(item => !!item);

  return filterClassName.join(' ');
};
