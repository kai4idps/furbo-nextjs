import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CustomCard from './CustomCard';
import styles from './accordionCardsStyle.js';

const useStyles = makeStyles(styles);
const AccordionSummaryCenter = withStyles({
  content: {
    textAlign: 'center',
    flexGrow: 0,
  },
})(MuiAccordionSummary);
const Accordion = withStyles({
  expanded: {
    '&$expanded': {
      margin: 0,
    },
  },
})(MuiAccordion);

const AccordionCardsSlice = (props) => {
  const classes = useStyles();
  const { expand, title, tableTitle, content } = props;
  const [open, setOpen] = useState(expand);
  return (
    <div className={classes.root}>
      <Accordion elevation={0} expanded={open} onChange={() => setOpen(!open)}>
        <AccordionSummaryCenter
          className={classes.header}
          expandIcon={<ExpandMore style={{ color: 'white' }} />}
        >
          {title}
        </AccordionSummaryCenter>
        <AccordionDetails className={classes.center}>
          <Grid container className={classes.gridContainer}>
            <Grid
              className={classes.gridTitle}
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
            >
              {RichText.render(tableTitle)}
            </Grid>
            {React.Children.toArray(
              content.map((item) => (
                <Grid
                  className={classes.gridItem}
                  item
                  xl={6}
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                >
                  <CustomCard
                    title={item.card_title}
                    titleIcon={item.card_title_icon}
                    subtitle={item.card_subtitle}
                    subtitleIcon={item.card_subtitle_icon}
                    short={item.card_content}
                    content={item.card_expand_content}
                  />
                </Grid>
              )),
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionCardsSlice;

AccordionCardsSlice.propTypes = {
  expand: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  tableTitle: PropTypes.array,
  content: PropTypes.array.isRequired,
};
