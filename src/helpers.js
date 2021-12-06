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

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const defineFontColor = (backgroundColor) => {
  const { r, g, b } = hexToRgb(backgroundColor);
  if (r * 0.299 + g * 0.587 + b * 0.114 > 186) {
    return '#434343';
  }
  return '#ffffff';
};
