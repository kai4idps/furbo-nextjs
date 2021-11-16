import React from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'components/Image';
import { customHtml } from './customHtml';
import styles from './textBoxStyle';

const useStyles = makeStyles(styles);

const TextBox = (props) => {
  const classes = useStyles();
  const { icon, text, backgroundColor = 'white' } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: backgroundColor }}>
      <div className={classes.imageContainer}>
        <Image className={classes.image} src={icon.url} alt={icon.alt} />
      </div>
      <div style={{ paddingTop: 4 }}>
        <RichText render={text} htmlSerializer={customHtml} />
      </div>
    </div>
  );
};

TextBox.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.array,
  backgroundColor: PropTypes.string,
};

export default TextBox;
