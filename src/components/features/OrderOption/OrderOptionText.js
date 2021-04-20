import React from 'react';
import propTypes from 'prop-types'

const OrderOptionText = (currentValue, setOptionValue) => (

  <div>
    <input
      type='text'
      onChange={(event) => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: propTypes.func,
  currentValue: propTypes.string
}

export default OrderOptionText;

