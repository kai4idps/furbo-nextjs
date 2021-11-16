import React from 'react';
import { isEmpty } from 'src/helpers';

export const customHtml = (type, element, content) => {
  if (isEmpty(element)) {
    return null;
  }
  if (element?.data?.label === 'Yellow Font') {
    return (
      <span
        style={{
          color: '#f7cd3d',
        }}
      >
        {content}
      </span>
    );
  } else if (element?.data?.label === 'Red Font') {
    return (
      <span
        style={{
          color: '#d0021b',
        }}
      >
        {content}
      </span>
    );
  } else if (element?.data?.label === 'Orange Font') {
    return (
      <span
        style={{
          color: '#ee684a',
        }}
      >
        {content}
      </span>
    );
  } else if (element?.data?.label === 'Blue Font') {
    return (
      <span
        style={{
          color: '#1e7bac',
        }}
      >
        {content}
      </span>
    );
  } else if (element?.data?.label === 'White Font') {
    return (
      <span
        style={{
          color: '#ffffff',
        }}
      >
        {content}
      </span>
    );
  }
  return null;
};
