import React from 'react';
import styles from './OrderOption.scss'
import propTypes from 'prop-types'
import {formatPrice} from '../../../utils/formatPrice'

const OrderOptionNumber = ({currentValue, limits, setOptionValue, price}) => (

  <div className={styles.number}>
    <input
      className={styles.inputSmall}
      type='number'
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      min={limits.min}
      max={limits.max}
      placeholder={limits.defaultValue}
    />
    People number {formatPrice(price)}
  </div>
);

OrderOptionNumber.propTypes = {
  limits: propTypes.object,
  currentValue: propTypes.node,
  price: propTypes.string,
  setOptionValue: propTypes.func
}

export default OrderOptionNumber;

