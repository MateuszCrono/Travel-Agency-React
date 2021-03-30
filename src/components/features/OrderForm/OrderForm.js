import propTypes from 'prop-types'
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import OrderSummary from "../OrderSummary/OrderSummary";


const OrderForm = (props) => (
    <Grid>
        <Row>
            <Col xs={12}>
                <OrderSummary tripCost={props.tripCost} options={props.options}/>
            </Col>
        </Row>
    </Grid>
);

OrderForm.prototypes = {
  tripCost: propTypes.string,
  options: propTypes.object
}

export default OrderForm;
