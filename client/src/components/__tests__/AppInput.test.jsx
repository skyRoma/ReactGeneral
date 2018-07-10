import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppInput from '../AppInput/AppInput';

Enzyme.configure({ adapter: new Adapter() });

let enzymeWrapper;
let props;

beforeEach(() => {
  props = {
    handleInputChange: jest.fn(),
    inputValue: '10',
    isError: false,
  };
  enzymeWrapper = mount(<AppInput {...props} />);
});

describe('components', () => {
  describe('AppInput', () => {
    it('should render the component wrapper', () => {
      expect(enzymeWrapper.exists()).toBe(true);
    });

    it('should render the input of the component', () => {
      expect(enzymeWrapper.containsMatchingElement(<input />)).toBe(true);
      //other way:
      expect(enzymeWrapper.find('input').length).toEqual(1);
    });

    it('should render the ErrorHint of the component', () => {
      expect(enzymeWrapper.containsMatchingElement(<div />)).toBe(true);
      //other way:
      expect(enzymeWrapper.find('div').length).toEqual(1);
    });

    it('should correct passed inputValue in props', () => {
      expect(enzymeWrapper.props().inputValue).toBe('10');
    });

    it('should correct passed isError in props', () => {
      expect(enzymeWrapper.props().isError).toBe(false);
    });

    it('input should render the correct value passed in props', () => {
      expect(enzymeWrapper.find('input').props().value).toEqual('10');
    });

    it('input changes should call handleInputChange() function passed in props', () => {
      enzymeWrapper.find('input[onChange]').props().onChange();
      expect(props.handleInputChange.mock.calls.length).toBe(1);
    });
  });
});

