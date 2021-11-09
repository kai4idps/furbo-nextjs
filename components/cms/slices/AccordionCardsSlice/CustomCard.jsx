import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import Image from 'components/Image';
import { isEmpty } from 'src/helpers';
import styles from './customCardStyle';

const useStyles = makeStyles(styles);

const CustomCard = (props) => {
  const { title, titleIcon, subtitle, subtitleIcon, short, content } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const customHtml = (type, element, content) => {
    if (isEmpty(element)) {
      return null;
    }
    if (element?.data?.url?.includes('#')) {
      return (
        <React.Fragment key={`${type}-${JSON.stringify(element)}`}>
          <button
            type="button"
            style={{
              color: '#0645ad',
              border: 'none',
              backgroundColor: 'transparent',
              fontSize: '18px',
              fontFamily: 'Avenir',
            }}
            onClick={handleExpandClick}
          >
            {content}
          </button>
        </React.Fragment>
      );
    }
    return null;
  };

  return (
    <VisibleSensorAnimation animation="grow">
      <Card className={classes.card} elevation={0}>
        <CardHeader
          className={classes.cardHeader}
          title={
            <div className={classes.cardTitle}>
              <Image
                className={classes.cardImage}
                src={titleIcon.url}
                alt={titleIcon.alt}
              />
              {RichText.render(title)}
            </div>
          }
        />
        <CardHeader
          className={classes.cardHeader}
          title={
            <div className={classes.cardSubtitle}>
              <Image
                className={classes.cardImage}
                src={subtitleIcon.url}
                alt={subtitleIcon.alt}
              />
              {RichText.render(subtitle)}
            </div>
          }
        />
        {!expanded && (
          <CardActions className={classes.cardAction} disableSpacing>
            <RichText render={short} htmlSerializer={customHtml} />
          </CardActions>
        )}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.cardAction}>
            {RichText.render(content)}
          </CardContent>
        </Collapse>
      </Card>
    </VisibleSensorAnimation>
  );
};

CustomCard.propTypes = {
  title: PropTypes.array.isRequired,
  titleIcon: PropTypes.object.isRequired,
  subtitle: PropTypes.array.isRequired,
  subtitleIcon: PropTypes.object.isRequired,
  short: PropTypes.array.isRequired,
  content: PropTypes.array.isRequired,
};

export default CustomCard;
