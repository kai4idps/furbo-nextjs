import { isEmpty } from 'src/helpers';

export const customHtml = (type, element, content, children, key) => {
  if (isEmpty(element)) {
    return null;
  }
  switch (element?.data?.label) {
    case 'Yellow Font':
      return (
        <span
          style={{
            color: '#f7cd3d',
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
            color: '#1e7bac',
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
            color: '#ffffff',
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
