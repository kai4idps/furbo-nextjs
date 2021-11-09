import { useState, Children } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import FooterButton from './FooterButton';
import styles from './footerAccordionStyle';

const useStyles = makeStyles(styles);

const AccordionSummary = withStyles({
  root: {
    minHeight: '50px',
    height: '50px',
    padding: '0px',
    '&$expanded': {
      minHeight: '50px',
      height: '50px',
    },
  },
  content: {
    margin: 0,
    padding: '0px',
    '&$expanded': {
      margin: 0,
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles({
  root: {
    padding: '0px',
  },
})(MuiAccordionDetails);

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&::before': {
      display: 'none',
    },
  },
  expanded: {
    '&$expanded': {
      margin: 0,
    },
  },
})(MuiAccordion);

const FooterAccordion = ({ title, list }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Accordion elevation={0} onChange={handleChange}>
      <AccordionSummary
        className={classes.accordionHeader}
        expandIcon={
          open === true ? (
            <Remove style={{ color: '#ffffff' }} />
          ) : (
            <Add style={{ color: '#ffffff' }} />
          )
        }
      >
        {title}
      </AccordionSummary>
      <AccordionDetails className={classes.accordionList}>
        {Children.toArray(
          list.map((info) => <FooterButton key={info.title} info={info} />),
        )}
      </AccordionDetails>
    </Accordion>
  );
};

FooterAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default FooterAccordion;
