import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary.js';

describe('Component TripSummary', () => {
  it('should generate correct path', () => {
    const expectedLink = '/trip/abc'
    const component = shallow(<TripSummary id='abc'/>)
    expect(component).find('link').prop('to').toEqual(expectedLink)
  });
  it('should show correct src and alt ', () => {
    const expectedSrc = 'Test sourca';
    const expectedAlt = 'Test alta';
    const component = shallow(<TripSummary id='abc' alt={expectedAlt} src={expectedSrc} />)
    expect(component).find('img').prop('src').toEqual(expectedSrc);
    expect(component).find('img').prop('alt').toEqual(expectedAlt);
  });
});
it('should render correct props for name, cost and days', () => {
  const expectedName = 'Mateusz';
  const expectedCost = '1500';
  const expectedDays = '7 days';
  const component = shallow(<TripSummary id='abc' cost={expectedCost} name={expectedName} days={expectedDays} cost={expectedCost}/>);

  const renderedTitle = component.find('.title').text();
  expect(renderedTitle).toEqual(expectedName);
  expect(component.find('.image').prop('src')).toEqual(expectedImage);
  expect(renderedTitle).toEqual(expectedDays);
});

// it('should throw error without required props', () => {
//   const mockVariants = 'small dummy';
//   const component = shallow(<tripSummary titleText='Lorem' imageSrc='image.jpg' variant={mockVariants} />);
//   expect(component.hasClass('component')).toBe(true);
//   expect(component.hasClass('small')).toBe(true);
//   expect(component.hasClass('dummy')).toBe(true);
// });
