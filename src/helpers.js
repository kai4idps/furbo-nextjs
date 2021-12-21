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

export const parseTime = (timeString) => {
  const currentDate = new Date().valueOf();
  let result = timeString;
  const curlyBracesRegex = /{([^}]+)}/;
  const bracketContent = timeString.match(curlyBracesRegex, timeString)[0];
  const content = timeString.match(curlyBracesRegex, timeString)[1];
  if (isEmpty(content)) {
    return result;
  }
  const alphabetRegex = /[^a-z]/gi;
  const operatorRegex = /[+-]/;
  const numberRegex = /[0-9]+/;
  const intervalType = content.replace(alphabetRegex, '');
  const operatorType = content.match(operatorRegex, content)?.[0];
  const biasCount =
    +content.match(numberRegex, content)?.[0] * (operatorType === '-' ? -1 : 1);
  if (intervalType === 'date') {
    const newDate = isEmpty(biasCount)
      ? new Date(currentDate)
      : new Date(currentDate + 1000 * 60 * 60 * 24 * biasCount);
    result = timeString.replace(
      bracketContent,
      `${newDate.getMonth() + 1}/${newDate.getDate()}`,
    );
  } else if (intervalType === 'hour') {
    const newDate = isEmpty(biasCount)
      ? new Date(currentDate)
      : new Date(currentDate + 1000 * 60 * 60 * biasCount);
    result = timeString.replace(bracketContent, newDate.getHours());
  } else if (intervalType === 'minute') {
    const newDate = isEmpty(biasCount)
      ? new Date(currentDate)
      : new Date(currentDate + 1000 * 60 * biasCount);
    result = timeString.replace(bracketContent, newDate.getMinutes());
  }
  return result;
};

export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};
