import propTypes from 'prop-types'
import React from 'react';
import {Grid, Row, Col } from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import styles from '../../common/Button/Button.scss';
import settings from '../../../data/settings';
import {formatPrice} from '../../../utils/formatPrice';
import calculateTotal from '../../../utils/calculateTotal';


const sendOrder = (options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};


const OrderForm = (props) => (
      <Grid>
        <Row>
              {pricing.map(options => (
              <Col md={4}  key={options.id}>
                <OrderOption
                {...options}
                currentValue={props.options[options.id]}
                setOrderOption={props.setOrderOption}
                />
              </Col>
              ))}
            <Col xs={12}>
            </Col>
            <Button classname={styles.component} onClick={() => sendOrder(options, tripCost)}>Order now!</Button>
        </Row>
      </Grid>
);

OrderForm.propTypes = {
  tripCost: propTypes.string,
  options: propTypes.object,
  setOrderOption: propTypes.func
}

export default OrderForm;

