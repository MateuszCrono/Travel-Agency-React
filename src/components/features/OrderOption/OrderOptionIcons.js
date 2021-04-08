import React from 'react';
import styles from './OrderOption.scss'
import {formatPrice} from '../../../utils/formatPrice'
import Icon from '../../common/Icon/Icon.js'
import propTypes from 'prop-types'

const OrderOptionIcons = ({values, setOptionValue, required,  currentValue }) => (

  <div
  className={styles.icon}>
    {required ? false : (
      <div value=''><Icon name={'times-circle'}> none</Icon></div>
    )}
    {values.map(value => (
      <div
      className={styles.icon}
      key={value.id}
      value={currentValue}
      onClick={value => setOptionValue(value.id)}>
        <Icon name={value.icon} />
        {value.name}
        ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  currentValue: propTypes.string,
  setOptionValue: propTypes.func,
  values: propTypes.array,
  required: propTypes.any
}

export default OrderOptionIcons;
