import React, { FC } from "react";
import PropTypes from 'prop-types';
import { ClassNameProps } from "../../types/components/base";
import styles from './styles.module.scss';
import { classList } from "../../utils/string";

const BoundingBox: FC<ClassNameProps> = (props) => {
  const { children, className, style = {} } = props;
  return (
    <div style={{...style}} className={classList(styles.bounding, className)}>
      {children}
    </div>
  )
};

BoundingBox.defaultProps = {
  className: '',
  style: {}
};

BoundingBox.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

export default BoundingBox;