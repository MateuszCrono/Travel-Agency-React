import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary.js';

describe('Component TripSummary', () => {

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
    });

  it('should generate correct path', () => {
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary id='abc' name='Mateusz Legendary Trip' image='image.jpg' cost='$1500' days={7} tags={['tag1', 'tag2']} />);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should show correct src and alt ', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'image';
    const component = shallow(<TripSummary id='abc' name={expectedAlt} cost='$1500' days={7} image={expectedSrc} tags={['tag1', 'tag2']} />)
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

it('should render correct props for name, cost and days', () => {
  const expectedName = 'Mateusz Legendary trip';
  const expectedCost = 'from $1500';
  const expectedDays = '7 days';
  const component = shallow(<TripSummary id='abc' image='image.jpg' cost='$1500' name={expectedName} days={7}  tags={['tag1', 'tag2']} />);

  const renderedTitle = component.find('.title').text();
  expect(renderedTitle).toEqual(expectedName);

  const renderDays = component.find('.details span').at(0).text()
  expect(renderDays).toEqual(expectedDays);

  const renderCost = component.find('.details span').at(1).text()
  expect(renderCost).toEqual(expectedCost);
  });

 it ('should render three tags in order', () => {
   const expectedTags = ['tagJedyneczka', 'TagDwojeczka', 'TagTrojeczka'];
   const component = shallow(<TripSummary id='abc' image='image.jpg' cost='$1500' name='Mateusz Legendary Trip' days={7} tags={['tagJedyneczka', 'TagDwojeczka', 'TagTrojeczka']} />);

   const firstTag = component.find('.tag').at(0).text()
   expect(firstTag).toEqual(expectedTags[0])

   const secondTag = component.find('.tag').at(1).text()
   expect(secondTag).toEqual(expectedTags[1])

   const thirdTag = component.find('.tag').at(2).text()
   expect(thirdTag).toEqual(expectedTags[2])
 });

 it ('if the tag is absent do not render div', () => {

  const component = shallow(<TripSummary id='abc' image='image.jpg' cost='$1500' name='Mateusz Legendary Trip' days={7} tags={[]} />);
  expect(component.hasClass('tags')).toBe(false)
 });

});
