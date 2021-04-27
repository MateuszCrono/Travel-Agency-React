import React, {useState} from 'react';
import propTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const OrderOptionDate = ({setOptionValue, currentValue}) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={currentValue}
      minDate={startDate}
      placeholder="MM/DD/YYYY"
      onChange={date => (setStartDate(date), setOptionValue(date))}
    />
  );
};


OrderOptionDate.propTypes = {
  setOptionValue: propTypes.func,
};

export default OrderOptionDate;

