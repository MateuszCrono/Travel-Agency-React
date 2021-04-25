import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd.js';



const select = {
  title: '.title',
  promo: '.promoDescription',
};

const mockProps = {
  title: 'PROMOTION',
  promo: 'BIG DISCOUNT',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', ()  => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });
  it ('should render both elements', () => {
    const component = shallow (<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true)
    expect(component.exists(select.promo)).toEqual(true)
  });
  it ('should render proper prop name', () => {
    const component = shallow (<HappyHourAd {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(mockProps.title);
  });

});
