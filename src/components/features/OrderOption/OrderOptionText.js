import React from 'react';
// import styles from './OrderOption.scss'
import propTypes from 'prop-types'

const OrderOptionText = (currentValue, setOptionValue) => (

  <div>
    <input
      type='text'
      placeholder={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: propTypes.func,
  currentValue: propTypes.string
}

export default OrderOptionText;

