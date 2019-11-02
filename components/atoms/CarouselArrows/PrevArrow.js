// @flow
/**
 * PrevArrow component to represent the left arrow for carousel
 * @module PrevArrow
 */
import React, { Fragment } from 'react';
import withStyles from '../../../lib/withStyles';
import styles from './Arrow.style';

const PrevArrow = ({ onClick, className }) => (
  <Fragment>
    <button
      onClick={onClick}
      className={`icon-left-arrow-large arrow-small ${className}`}
      type="button"
    />
  </Fragment>
);

export default withStyles(PrevArrow, styles);
export { PrevArrow as PrevArrowVanilla };
