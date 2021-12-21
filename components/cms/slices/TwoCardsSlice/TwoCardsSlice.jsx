import { Children } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Image from 'components/Image';
import RenderElement from 'components/cms/RenderElement';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import { isEmpty } from 'src/helpers';
import styles from './twoCardsSliceStyle.js';

const useStyles = makeStyles(styles);

const TwoCardsSlice = ({
  title,
  titleUnderline,
  imageFullWidth,
  enableElevation,
  enablePadding,
  content,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <VisibleSensorAnimation animation="grow">
      <div className={classes.root}>
        {!isEmpty(title) && (
          <div
            className={classes.title}
            style={{
              textDecorationLine: titleUnderline ? 'underline' : 'none',
              textDecorationColor: titleUnderline
                ? theme.palette.yellow
                : 'none',
              textDecorationThickness: titleUnderline ? '4px' : 'none',
              textUnderlineOffset: titleUnderline ? '5px' : 'none',
              textDecorationSkip: false,
            }}
          >
            {RichText.render(title)}
          </div>
        )}
        <Grid
          container
          className={classes.container}
          style={{ maxWidth: imageFullWidth ? null : '860px' }}
        >
          {Children.toArray(
            content.map((item) => (
              <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className={classes.cardContainer}
              >
                <Card
                  className={`${classes.card} ${
                    enablePadding ? classes.extraPadding : null
                  } ${
                    !isEmpty(item.card_background_image)
                      ? classes.backgroundImageCard
                      : null
                  }`}
                  elevation={enableElevation ? 5 : 0}
                  style={{
                    backgroundImage: !isEmpty(item.card_background_image)
                      ? `url(${item.card_background_image.url})`
                      : null,
                  }}
                >
                  {!isEmpty(item.card_image) && (
                    <div style={{ width: '100%' }}>
                      <Image
                        className={
                          imageFullWidth
                            ? classes.cardMedia
                            : classes.cardMediaSmall
                        }
                        alt={item.card_image.alt}
                        src={item.card_image.url}
                      />
                    </div>
                  )}
                  <CardContent className={classes.cardContent}>
                    <div className={classes.text}>
                      {RichText.render(item.card_text)}
                    </div>
                    <div className={classes.slice}>
                      <RenderElement
                        type={item.card_content.type}
                        data={item.card_content.data}
                      />
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            )),
          )}
        </Grid>
      </div>
    </VisibleSensorAnimation>
  );
};

TwoCardsSlice.propTypes = {
  title: PropTypes.array,
  titleUnderline: PropTypes.bool,
  imageFullWidth: PropTypes.bool,
  enableElevation: PropTypes.bool,
  enablePadding: PropTypes.bool,
  content: PropTypes.array,
};

export default TwoCardsSlice;
