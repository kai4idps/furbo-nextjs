import React, { useState, useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Image from 'components/Image';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import { isEmpty } from 'src/helpers';
import styles from './accordionFeatureListSliceStyle.js';

const useStyles = makeStyles(styles);
const AccordionSummaryCenter = withStyles({
  content: {
    textAlign: 'center',
    flexGrow: 0,
  },
})(MuiAccordionSummary);
const AccordionSummary = withStyles({
  root: {
    minHeight: '50px',
    '&$expanded': {
      minHeight: '50px',
    },
  },
  content: {
    margin: 0,
    '&$expanded': {
      margin: 0,
    },
  },
  expandIcon: {
    pRemoveing: 3,
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles({
  root: {
    padding: '10px 0px 0px 0px',
  },
})(MuiAccordionDetails);

const Accordion = withStyles({
  expanded: {
    '&$expanded': {
      margin: 0,
    },
  },
})(MuiAccordion);

const FeatureItem = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { item } = props;

  const handleChange = () => {
    setOpen(!open);
  };

  return (
    <Accordion
      elevation={0}
      className={classes.accordionItem}
      onChange={handleChange}
    >
      <AccordionSummary
        className={classes.itemHeader}
        aria-controls={item.feature_name}
        id={item.feature_name}
        expandIcon={
          open ? (
            <Remove className={classes.expandIcon} />
          ) : (
            <Add className={classes.expandIcon} />
          )
        }
      >
        <div className={classes.itemImage}>
          <Image
            className={classes.center}
            src={item.feature_icon.url}
            alt={item.feature_icon.alt}
            type="image/svg+xml"
          />
        </div>
        <div className={classes.itemTitle}>{item.feature_name}</div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.itemContent}>
          {RichText.render(item.feature_content)}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

FeatureItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const FeatureGrid = (props) => {
  const { content } = props;
  return (
    <>
      {React.Children.toArray(
        content.map((item) => <FeatureItem item={item} />),
      )}
    </>
  );
};

FeatureGrid.propTypes = {
  content: PropTypes.array.isRequired,
};

const AccordionFeatureListSlice = (props) => {
  const classes = useStyles();
  const { title, content } = props;
  const [leftGridContent, setLeftGridContent] = useState();
  const [rightGridContent, setRightGridContent] = useState();

  useEffect(() => {
    const left = content.filter((item) => item.grid_position === 'Left');
    const right = content.filter((item) => item.grid_position === 'Right');
    setLeftGridContent(left);
    setRightGridContent(right);
  }, [content]);

  if (isEmpty(leftGridContent) && isEmpty(rightGridContent)) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Accordion expanded elevation={0}>
        <AccordionSummaryCenter
          className={classes.header}
          aria-controls="key-features-header"
          id="key-features-header"
        >
          {title}
        </AccordionSummaryCenter>
        <VisibleSensorAnimation animation="grow">
          <AccordionDetails>
            <Grid container>
              <Grid
                className={classes.gridLeft}
                item
                xl={6}
                lg={6}
                md={6}
                sm={6}
                xs={12}
              >
                <FeatureGrid content={leftGridContent} />
                <Hidden smUp>
                  <FeatureGrid content={rightGridContent} />
                </Hidden>
              </Grid>
              <Hidden xsDown>
                <Grid
                  className={classes.gridRight}
                  item
                  xl={6}
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                >
                  <FeatureGrid content={rightGridContent} />
                </Grid>
              </Hidden>
            </Grid>
          </AccordionDetails>
        </VisibleSensorAnimation>
      </Accordion>
    </div>
  );
};

export default AccordionFeatureListSlice;

AccordionFeatureListSlice.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};
