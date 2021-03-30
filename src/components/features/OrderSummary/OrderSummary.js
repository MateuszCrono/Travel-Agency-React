import React from 'react';
import styles from './OrderSummary.scss';
import propTypes from 'prop-types'
import {formatPrice} from '../../../utils/formatPrice'
import {calculateTotal} from '../../../utils/calculateTotal'


const OrderSummary = props => {
    const CalculatingMachine = calculateTotal(formatPrice(props.tripCost), props.options )
    return ( <h2 className={styles.component}>Total: <strong>{CalculatingMachine}</strong></h2>)
}
OrderSummary.propTypes = {
  tripCost: propTypes.node,
  Chuj: propTypes.node,
  options: propTypes.object
}

export default OrderSummary;
