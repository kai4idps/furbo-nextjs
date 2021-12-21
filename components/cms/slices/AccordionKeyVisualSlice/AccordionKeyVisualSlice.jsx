import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ExpandMore from '@material-ui/icons/ExpandMore';
import styles from './accordionKeyVisualSliceStyle';

const useStyles = makeStyles(styles);
const AccordionSummaryCenter = withStyles({
  content: {
    textAlign: 'center',
    flexGrow: 0,
  },
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

const AccordionKeyVisualSlice = (props) => {
  const classes = useStyles();
  const {
    expand,
    title,
    subtitle,
    textContent,
    backgroundImageDesktop,
    backgroundImageMobile,
  } = props;
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(expand);

  return (
    <div className={classes.root}>
      <Accordion elevation={0} expanded={open} onChange={() => setOpen(!open)}>
        <AccordionSummaryCenter
          className={classes.header}
          aria-controls={title}
          id={title}
          expandIcon={<ExpandMore style={{ color: theme.palette.white }} />}
        >
          {title}
        </AccordionSummaryCenter>
        <AccordionDetails>
          <div
            className={classes.content}
            style={{
              backgroundImage: smDown
                ? `url(${backgroundImageMobile.url})`
                : `url(${backgroundImageDesktop.url})`,
              height: smDown
                ? 'auto'
                : backgroundImageDesktop.dimensions.height,
            }}
          >
            <Grid container>
              <Grid item xl={5} lg={5} md={5} className={classes.grid}>
                <div className={classes.subtitle}>
                  {RichText.render(subtitle)}
                </div>
                <div className={classes.textContent}>
                  {RichText.render(textContent)}
                </div>
              </Grid>
            </Grid>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionKeyVisualSlice;

AccordionKeyVisualSlice.propTypes = {
  expand: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.array.isRequired,
  textContent: PropTypes.array.isRequired,
  backgroundImageDesktop: PropTypes.object.isRequired,
  backgroundImageMobile: PropTypes.object.isRequired,
};
