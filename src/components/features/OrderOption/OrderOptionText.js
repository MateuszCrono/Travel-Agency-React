import React from 'react';
import propTypes from 'prop-types'
import styles from './OrderOption.scss'

const OrderOptionText = ({currentValue, setOptionValue}) => (

  <div>
    <input
      type='text'
      onChange={event => setOptionValue(event.currentTarget.value)}
      placeholder={currentValue}
      className={styles.input}
    />
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: propTypes.func,
  currentValue: propTypes.string
}

export default OrderOptionText;

