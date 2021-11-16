import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Close from '@material-ui/icons/Close';
import { isEmpty } from 'src/helpers';
import { REGION_INFO } from 'config/navigation';
import FlagButton from './FlagButton';

import styles from './regionDialogStyle';

const useStyles = makeStyles(styles);

const ContinentBlock = ({ title, info }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.blockTitle}>{title}</div>
      <Grid className={classes.blockContainer} container>
        {React.Children.toArray(
          info.map((country) => (
            <Grid item md={12 / Math.ceil(info.length / 5)} sm={12} xs={12}>
              <FlagButton info={country} />
            </Grid>
          )),
        )}
      </Grid>
    </>
  );
};

ContinentBlock.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.array.isRequired,
};

const getTitle = (title, content) => {
  if (title === 'Americas') {
    return content.americas;
  } else if (title === 'Europe') {
    return content.europe;
  } else if (title === 'Asia-Pacific') {
    return content['asia-pacific'];
  }
};

const RegionDialog = ({ open, handleClose, content }) => {
  const theme = useTheme();
  const classes = useStyles();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [regionInfo, setRegionInfo] = useState();
  useEffect(() => {
    const getRegionInfo = () => {
      return [...Object.values(REGION_INFO)]
        ?.filter((item) => item.code !== 'cn')
        ?.reduce((prev, curr) => {
          prev[curr.group] = [...(prev[curr.group] || []), curr];
          return prev;
        }, {});
    };
    setRegionInfo(getRegionInfo());
  }, []);

  if (isEmpty(regionInfo)) {
    return null;
  }

  return (
    <>
      <Hidden mdUp>
        <Dialog fullScreen={smDown} open={open} onClose={handleClose}>
          <DialogContent
            className={classes.dialogContent}
            onClick={() => {
              if (open) {
                handleClose();
              }
            }}
          >
            <div className={classes.dialogContentHeader}>
              <div className={classes.headerTitle}>
                {content.visit_your_location}
              </div>
              <Close className={classes.closeIcon} onClick={handleClose} />
            </div>
            <div className={classes.underLine} />
            {React.Children.toArray(
              Object.values(regionInfo).map((info, index) => (
                <ContinentBlock
                  title={getTitle(Object.keys(regionInfo)[index], content)}
                  info={info}
                />
              )),
            )}
          </DialogContent>
        </Dialog>
      </Hidden>
      <Hidden smDown>
        <Grid className={classes.gridContainer} container>
          {React.Children.toArray(
            Object.values(regionInfo).map((info, index) => (
              <Grid
                key={Object.keys(regionInfo)[index]}
                className={classes.gridItem}
                item
                sm={Math.ceil(info.length / 5) * 3}
              >
                <ContinentBlock
                  title={Object.keys(regionInfo)[index]}
                  info={info}
                />
              </Grid>
            )),
          )}
        </Grid>
      </Hidden>
    </>
  );
};

RegionDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  content: PropTypes.object.isRequired,
};

export default RegionDialog;
