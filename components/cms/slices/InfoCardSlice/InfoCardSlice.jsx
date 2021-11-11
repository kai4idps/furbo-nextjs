import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { makeStyles } from '@material-ui/core/styles';
import RenderButtonSlice from 'components/cms/RenderButtonSlice';

import styles from './infoCardSliceStyle';

const useStyles = makeStyles(styles);

const InfoCard = (props) => {
  const classes = useStyles();
  const { title, titleUnderline, subtitle, content, backgroundColor } = props;
  return (
    <div
      className={classes.root}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div
        className={classes.title}
        style={{
          textDecorationLine: titleUnderline ? 'underline' : 'none',
          textDecorationColor: titleUnderline ? '#f7cd3d' : 'none',
          textDecorationThickness: titleUnderline ? '4px' : 'none',
          textUnderlineOffset: titleUnderline ? '5px' : 'none',
          textDecorationSkip: false,
        }}
      >
        {RichText.render(title)}
      </div>
      <div className={classes.subtitle}>{RichText.render(subtitle)}</div>
      {React.Children.toArray(
        content.map((slice) => RenderButtonSlice(slice.content)),
      )}
    </div>
  );
};

export default InfoCard;

InfoCard.propTypes = {
  title: PropTypes.array,
  titleUnderline: PropTypes.bool,
  subtitle: PropTypes.array,
  content: PropTypes.array,
  backgroundColor: PropTypes.string,
};
