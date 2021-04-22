import React from 'react';
import styles from './OrderOption.scss'
import {formatPrice} from '../../../utils/formatPrice'
import Icon from '../../common/Icon/Icon.js'
import propTypes from 'prop-types'

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (

  <div
  className={styles.icon}>
    {required ? false : (
      <div className={styles.icon} onClick={() => setOptionValue('')} value=''>
        <Icon name={'times-circle'}> none </Icon>
      </div>
    )}
    {values.map(value => (
      <section
      className={currentValue === value.id ? styles.iconActive : styles.icon}
      key={value.id}
      value={currentValue}
      onClick= {() => setOptionValue(value.id)}>
        {console.log(value.id)}
        <Icon name={value.icon} />
        {value.name}
        ({formatPrice(value.price)})
      </section>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  id: propTypes.string,
  // name: propTypes.string,
  currentValue: propTypes.node,
  setOptionValue: propTypes.func,
  values: propTypes.array,
  required: propTypes.any
}

export default OrderOptionIcons;

