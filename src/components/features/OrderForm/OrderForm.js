import propTypes from 'prop-types'
import React from 'react';
import {Grid, Row, Col } from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal}  from '../../../utils/calculateTotal';
import OrderSummary from '../OrderSummary/OrderSummary';


const sendOrder = (options, tripCost, tripId, tripCountry, tripName) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripCost,
    tripId,
    tripCountry,
    tripName,
  };

  if (options.name === '' || options.contact === ''){
    alert ('Please fill in your contact data')
  } else {
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

};

const OrderForm = ({ tripCost, options, setOrderOption, tripName, tripId, tripCountry }) => (
  <Grid>
    <Row>
      {pricing.map(option => (
        < Col md={4} key={option.id}>
          <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
        </Col>
      ))}
      < Col xs={12} >
        <OrderSummary tripCost={tripCost} options={options} />
      </Col>
      <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, tripCountry)}>Order now!</Button>
    </Row>
  </Grid >
);

OrderForm.propTypes = {
  tripCost: propTypes.node,
  options: propTypes.object,
  setOrderOption: propTypes.func,
  tripName: propTypes.string,
  tripId: propTypes.string,
  tripCountry: propTypes.string,
};

export default OrderForm


