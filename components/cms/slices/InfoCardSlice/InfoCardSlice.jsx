import { Children } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { makeStyles } from '@material-ui/core/styles';
import RenderElement from 'components/cms/RenderElement';
import Image from 'components/Image';
import { isEmpty } from 'src/helpers';

import styles from './infoCardSliceStyle';

const useStyles = makeStyles(styles);

const InfoCard = (props) => {
  const classes = useStyles();
  const { title, logo, titleUnderline, subtitle, content, backgroundColor } =
    props;
  return (
    <div
      className={classes.root}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {!isEmpty(logo) && (
        <Image className={classes.image} src={logo.url} alt={logo.alt} />
      )}
      <div>
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
        {Children.toArray(
          content.map((slice) => (
            <RenderElement
              type={slice.content.type}
              data={slice.content.data}
            />
          )),
        )}
      </div>
    </div>
  );
};

export default InfoCard;

InfoCard.propTypes = {
  title: PropTypes.array,
  logo: PropTypes.node,
  titleUnderline: PropTypes.bool,
  subtitle: PropTypes.array,
  content: PropTypes.array,
  backgroundColor: PropTypes.string,
};
