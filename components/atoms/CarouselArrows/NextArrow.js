// @flow
/**
 * NextArrow component to represent the right arrow for carousel
 * @module NextArrow
 */
import React, { Fragment } from 'react';
import withStyles from '../../../lib/withStyles';
import styles from './Arrow.style';

const NextArrow = ({ onClick, className }) => (
  <Fragment>
    <button
      onClick={onClick}
      className={`icon-right-arrow-large arrow-small ${className}`}
      type="button"
    />
  </Fragment>
);

export default withStyles(NextArrow, styles);
export { NextArrow as NextArrowVanilla };
