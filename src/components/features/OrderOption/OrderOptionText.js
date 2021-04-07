import React from 'react';
// import styles from './OrderOption.scss'
import propTypes from 'prop-types'

const OrderOptionText = () => (

  <div>
    <input
      type='text'
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: propTypes.func
}

export default OrderOptionText;

