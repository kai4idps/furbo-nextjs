export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};

export const validateExpression = (exp, string) => {
  return exp.test(string);
};

export const toId = (string) => {
  return string.replace(/ /g, '-').toLowerCase();
};
