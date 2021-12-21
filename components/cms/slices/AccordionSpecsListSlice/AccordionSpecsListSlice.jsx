import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { useTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Divider from '@material-ui/core/Divider';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Image from 'components/Image';
import styles from './accordionSpecsListSliceStyle';

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

const AccordionSpecsListSlice = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { expand, title, mainImage, content } = props;
  const [open, setOpen] = useState(expand);

  return (
    <div className={classes.root}>
      <Accordion elevation={0} expanded={open} onChange={() => setOpen(!open)}>
        <AccordionSummaryCenter
          className={classes.header}
          aria-controls="specs-header"
          id="specs-header"
          expandIcon={<ExpandMore style={{ color: theme.palette.white }} />}
        >
          {title}
        </AccordionSummaryCenter>
        <AccordionDetails>
          <div className={classes.content}>
            <div>
              <Image
                className={classes.specImg}
                alt={mainImage.alt}
                src={mainImage.url}
              />
            </div>
            <div className={classes.table}>
              {React.Children.toArray(
                content.map((item, index) => (
                  <>
                    <div className={classes.row}>
                      <div className={classes.columnLeft}>
                        {RichText.render(item.item)}
                      </div>
                      <div className={classes.columnRight}>
                        {RichText.render(item.item_content)}
                      </div>
                    </div>
                    {index !== content.length - 1 && <Divider />}
                  </>
                )),
              )}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

AccordionSpecsListSlice.propTypes = {
  expand: PropTypes.bool,
  title: PropTypes.string.isRequired,
  mainImage: PropTypes.object.isRequired,
  content: PropTypes.array.isRequired,
};

export default AccordionSpecsListSlice;
