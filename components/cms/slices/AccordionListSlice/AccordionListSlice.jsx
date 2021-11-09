import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Add from '@material-ui/icons/Add';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Remove from '@material-ui/icons/Remove';
import styles from './accordionListSliceStyle';

const useStyles = makeStyles(styles);

const AccordionSummaryCenter = withStyles({
  content: {
    textAlign: 'center',
    flexGrow: 0,
  },
})(MuiAccordionSummary);

const AccordionSummary = withStyles({
  root: {
    minHeight: '60px',
    padding: '0px 5px',
    '&$expanded': {
      minHeight: '60px',
    },
  },
  content: {
    margin: 0,
    '&$expanded': {
      margin: 0,
    },
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

const CustomAccordion = ({ item }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Accordion
      elevation={0}
      className={classes.accordionItem}
      onChange={handleChange}
    >
      <AccordionSummary
        className={classes.itemHeader}
        expandIcon={
          open === true ? (
            <Remove style={{ color: '#f7cd3d' }} />
          ) : (
            <Add style={{ color: '#f7cd3d' }} />
          )
        }
      >
        {RichText.render(item.content_title)}
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.itemContent}>
          {RichText.render(item.content_text)}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

CustomAccordion.propTypes = {
  item: PropTypes.object,
};

const AccordionListSlice = (props) => {
  const classes = useStyles();
  const { expand, title, content } = props;
  const [open, setOpen] = useState(expand);
  return (
    <div className={classes.root}>
      <Accordion elevation={0} expanded={open} onChange={() => setOpen(!open)}>
        <AccordionSummaryCenter
          className={classes.header}
          aria-controls={title}
          id={title}
          expandIcon={<ExpandMore style={{ color: 'white' }} />}
        >
          {title}
        </AccordionSummaryCenter>
        <AccordionDetails>
          <div className={classes.content}>
            {React.Children.toArray(
              content.map((item) => <CustomAccordion item={item} />),
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

AccordionListSlice.propTypes = {
  expand: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
};

export default AccordionListSlice;
