import { isEmpty, parseTime } from 'src/helpers';
import theme from 'styles/theme';

export const colorFont = (type, element, content, children, key) => {
  if (isEmpty(element)) {
    return null;
  }
  switch (element?.data?.label) {
    case 'Yellow Font':
      return (
        <span
          style={{
            color: theme.palette.yellow,
          }}
          key={key}
        >
          {content}
        </span>
      );
    case 'Red Font':
      return (
        <span
          style={{
            color: '#d0021b',
          }}
          key={key}
        >
          {content}
        </span>
      );
    case 'Orange Font':
      return (
        <span
          style={{
            color: '#ee684a',
          }}
          key={key}
        >
          {content}
        </span>
      );
    case 'Blue Font':
      return (
        <span
          style={{
            color: theme.palette.blue,
          }}
          key={key}
        >
          {content}
        </span>
      );
    case 'White Font':
      return (
        <span
          style={{
            color: theme.palette.white,
          }}
          key={key}
        >
          {content}
        </span>
      );
    default:
      return null;
  }
};

export const colorFontTime = (type, element, content, children, key) => {
  if (isEmpty(element)) {
    return null;
  }
  switch (element?.data?.label) {
    case 'Yellow Font':
      return (
        <span
          style={{
            color: theme.palette.yellow,
          }}
          key={key}
        >
          {parseTime(content)}
        </span>
      );
    case 'Red Font':
      return (
        <span
          style={{
            color: '#d0021b',
          }}
          key={key}
        >
          {parseTime(content)}
        </span>
      );
    case 'Orange Font':
      return (
        <span
          style={{
            color: '#ee684a',
          }}
          key={key}
        >
          {parseTime(content)}
        </span>
      );
    case 'Blue Font':
      return (
        <span
          style={{
            color: theme.palette.blue,
          }}
          key={key}
        >
          {parseTime(content)}
        </span>
      );
    case 'White Font':
      return (
        <span
          style={{
            color: theme.palette.white,
          }}
          key={key}
        >
          {parseTime(content)}
        </span>
      );
    default:
      return null;
  }
};
