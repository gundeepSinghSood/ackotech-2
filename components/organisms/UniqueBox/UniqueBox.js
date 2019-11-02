import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../../lib/withStyles';
import styles from './UniqueBox.style';
import Button from '../../atoms/Button';
import Box from '../../molecules/SimpleBox';

const UniqueBox = props => {
  const { className, boxData } = props;
  const title = boxData.title;
  const button = boxData.viewAllServices;

  return (
    <section className={`container ${className}`}>
      <div>
        <div
          className="unique-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="row">
          {boxData.data.map((item, idx) => {
            return <Box {...item} idx={idx} />;
          })}
          <div className="unique-button">
            <Button buttonWithLink url={button.url}>
              {button.title}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

UniqueBox.propTypes = {};

UniqueBox.defaultProps = {};

export default withStyles(UniqueBox, styles);

export { UniqueBox as UniqueBoxVanilla };
