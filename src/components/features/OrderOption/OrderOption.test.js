import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption.js';
import DatePicker from "react-datepicker";

describe('Component OrderOption', () => {
  it('should render without errors', () => {
    const component = shallow(<OrderOption type='checkboxes' name='Test Andromedy' />)
    expect(component).toBeTruthy();
  });
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });
  it('should return same name and title', () => {
    const expectedName = 'Mateusz'
    const component = shallow(<OrderOption type='checkboxes' name={expectedName}/>);
    expect(component.find('.title').text()).toEqual(expectedName);
  });

  const optionTypes = {
    dropdown: 'OrderOptionDropdown',
    icons: 'OrderOptionIcons',
    checkboxes: 'OrderOptionCheckboxes',
    number: 'OrderOptionNumber',
    text: 'OrderOptionText',
    date: 'OrderOptionDate',
  };
  const mockProps = {
    id: 'abc',
    name: 'Lorem',
    values: [
      {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
      {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
    ],
    required: false,
    currentValue: 'aaa',
    price: '50%',
    limits: {
      min: 0,
      max: 6,
    },
  };

  const mockPropsForType = {
    dropdown: {},
    icons: {},
    checkboxes: {currentValue: [mockProps.currentValue]},
    number: {currentValue: 1},
    text: {},
    date: {},
  };

  const testValue = mockProps.values[1].id;
  const testValueNumber = 3;

  for(let type in optionTypes){
    describe(`Component OrderOption with type=${type}`, () => {
      /* test setup */
      let component;
      let subcomponent;
      let renderedSubcomponent;
      let mockSetOrderOption; /* 1 */

    beforeEach(() => {
      mockSetOrderOption = jest.fn(); /* 2 */
      component = shallow(
      <OrderOption
        type={type}
        setOrderOption={mockSetOrderOption} /* 3 */
        {...mockProps}
        {...mockPropsForType[type]}
    />
  );
        subcomponent = component.find(optionTypes[type]);
        renderedSubcomponent = subcomponent.dive();
      });
      /* common tests */
      it(`renders ${optionTypes[type]}`, () => {
        expect(subcomponent).toBeTruthy();
        expect(subcomponent.length).toBe(1);
      });

      /* type-specific tests */
      switch (type) {
        case 'dropdown': {
          it('contains select and options', () => {
            const select = renderedSubcomponent.find('select');
            expect(select.length).toBe(1);

            const emptyOption = select.find('option[value=""]').length;
            expect(emptyOption).toBe(1);

            const options = select.find('option').not('[value=""]');
            expect(options.length).toBe(mockProps.values.length);
            expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
            expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
          });

          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
          });

          break;
        }
        case 'icons': {
          it ('contains section and icons', () => {
            const section = renderedSubcomponent.find('section.icon')
            expect(section.length).toBe(1);

          });
          it('should run setOrderOption function on click', () => {
            renderedSubcomponent.find('section.icon').simulate('click');
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
          });
          break;
        }
        case 'checkboxes': {

          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find(`input[value="${testValue}"]`).simulate('change', {currentTarget: {checked: true}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id] : [mockProps.currentValue, testValue]});
          });
          break;
        }
        case 'number': {
          it ('it contains numbers', () => {
            const number = renderedSubcomponent.find('.number')
            expect(number.length).toBe(1);

            const input = renderedSubcomponent.find('input[type="number"]');

            expect(input.length).toBe(1);
            expect(input.prop('min')).toBe(mockProps.limits.min);
            expect(input.prop('max')).toBe(mockProps.limits.max);
            expect(input.prop('value')).toBe(1);

          });
          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValueNumber}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber} );
          });

          break;
        }
        case 'text': {
          it ('it contains div and text', () => {
            const div = renderedSubcomponent.find('div')
            expect(div.length).toBe(1);

            const input = renderedSubcomponent.find('input[type="text"]');
            expect(input.length).toBe(1);
          });
          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('input').simulate('cs', {currentTarget: {value: testValue}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue} );
          });
          break;
        }
        case 'date': {
          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find(DatePicker).simulate('change', testValue);
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue} );
          });
          break;
        }
      }
    });
  }


});

