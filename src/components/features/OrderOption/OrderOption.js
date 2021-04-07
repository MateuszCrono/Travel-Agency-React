import styles from './OrderOption.scss'
import React from 'react'
import OrderOptionDropdown from './OrderOptionDropdown'
import OrderOptionIcons from './OrderOptionIcons'
import OrderOptionNumber from './OrderOptionNumber'
import OrderOptionCheckboxes from './OrderOptionCheckboxes'
import OrderOptionDate from './OrderOptionDate'
import OrderOptionText from './OrderOptionText'

const OrderOption = ({name, type, id, setOrderOption, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
        setOptionValue={value => setOrderOption({[id]: value})}
          {...otherProps}
        />
      </div>
    );
  }
};

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  date: OrderOptionDate,
  text: OrderOptionText
};

export default OrderOption
