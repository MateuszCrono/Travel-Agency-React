import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  component: '.component',
};

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
}

const checkDescriptionAtDate = (date, expectedDescription) => {
  it(`should show correct  ${date}`, () => {
    global.Date = mockDate(`${date}`);

    const component = shallow(<DaysToSummer />);
    const renderedTime = component.find(select.component).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

  describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
});

  describe('Component DaysToSummer during Summer', () => {
    checkDescriptionAtDate('2021-06-23', '');
    checkDescriptionAtDate('2021-08-15', '');
    checkDescriptionAtDate('2021-07-11', '');
});

describe('Component DaysToSummer not in Summer', () => {
  checkDescriptionAtDate('2021-05-21', '31 days to summer');
    checkDescriptionAtDate('2021-04-12', '70 days to summer');
    checkDescriptionAtDate('2021-01-01', '170 days to summer');
});

describe('Component DaysToSummer one day before Summer', () => {
  checkDescriptionAtDate('2021-06-20', '1 day to summer');
});
