import propTypes from 'prop-types'
import React from 'react';
import {Grid, Row, Col } from 'react-flexbox-grid';
import OrderSummary from "../OrderSummary/OrderSummary";
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import { setOrderOption } from '../../../redux/orderRedux';

const OrderForm = (props) => (
      <Grid>
        <Row>
              {pricing.map(options => (
              <Col md={4}  key={options.id}>
                <OrderOption
                {...options}
                currentValue={options.id}
                setOrderOption={setOrderOption}
                />
              </Col>
              ))}
            <Col xs={12}>
                <OrderSummary tripCost={props.tripCost} options={props.options}/>
            </Col>
        </Row>
      </Grid>
);

OrderForm.propTypes = {
  tripCost: propTypes.string,
  options: propTypes.object,
  setOrderOption: propTypes.func
}

export default OrderForm;

