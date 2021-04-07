import React from 'react';
import styles from './OrderOption.scss'
import {formatPrice} from '../../../utils/formatPrice'
import propTypes from 'prop-types'

const OrderOptionDropdown = ({values, required, currentValue, setOptionValue}) => (
  <select
    className={styles.dropdown}
    value={currentValue}
    onChange={event => setOptionValue(event.currentTarget.value)}
  >
    {required ? '' : (
      <option key='null' value=''>---</option>
    )}
    {values.map(value => (
      <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
    ))}
  </select>
);

OrderOptionDropdown.propTypes = {
  id: propTypes.string,
  currentValue: propTypes.string,
  setOptionValue: propTypes.func,
  values: propTypes.array,
  required: propTypes.node,
};

export default OrderOptionDropdown;
