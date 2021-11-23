import { Children } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { RichText } from 'prismic-reactjs';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Hidden from '@material-ui/core/Hidden';
import NextImage from 'next/image';
import Image from 'components/Image';
import { NEW_ICON_SVG } from 'config/images/general';
import Check from '@material-ui/icons/Check';
import styles from './comparisonTableSliceStyle';

const useStyles = makeStyles(styles);

const ComparisonTable = ({
  itemAName,
  itemAImage,
  itemBName,
  itemBImage,
  content,
}) => {
  const classes = useStyles();
  return (
    <TableContainer className={classes.tableContainer} elevation={0}>
      <div className={classes.header}>
        <div className={classes.headerBoxItem}>
          <Image
            className={classes.itemImage}
            src={itemAImage.url}
            alt={itemAImage.alt}
          />
        </div>
        <div className={classes.vs}>
          <h1>VS</h1>
        </div>
        <div className={classes.headerBoxItem}>
          <Image
            className={classes.itemImage}
            src={itemBImage.url}
            alt={itemBImage.alt}
          />
        </div>
      </div>
      <div className={classes.header}>
        <div className={classes.headerBoxItem}>
          <div className={classes.itemName}>{RichText.render(itemAName)}</div>
        </div>
        <Hidden xsDown>
          <div style={{ width: '200px' }} />
        </Hidden>
        <div className={classes.headerBoxItem}>
          <div className={classes.itemName}>{RichText.render(itemBName)}</div>
        </div>
      </div>
      <Table className={classes.table}>
        <TableBody className={classes.tableBody}>
          {Children.toArray(
            content.map((row) => (
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableCell}>
                  {row.check_item_a && (
                    <Check
                      className={classes.icon}
                      style={{ color: row.red_font ? 'red' : '#434343' }}
                    />
                  )}
                </TableCell>
                <TableCell
                  className={classes.tableCellCenter}
                  style={{
                    color: row.red_font ? 'red' : '#434343',
                  }}
                >
                  {row.new_icon && (
                    <div className={classes.newIcon}>
                      <NextImage
                        src={NEW_ICON_SVG}
                        alt="new-icon"
                        width={35}
                        height={35}
                      />
                    </div>
                  )}
                  {RichText.render(row.function)}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {row.check_item_b && (
                    <Check
                      className={classes.icon}
                      style={{ color: row.red_font ? 'red' : '#434343' }}
                    />
                  )}
                </TableCell>
              </TableRow>
            )),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

ComparisonTable.propTypes = {
  itemAName: PropTypes.array.isRequired,
  itemAImage: PropTypes.object.isRequired,
  itemBName: PropTypes.array.isRequired,
  itemBImage: PropTypes.object.isRequired,
  content: PropTypes.array.isRequired,
};

export default ComparisonTable;
